import React, {useState} from 'react';
import axios from 'axios';
import './GalleryItem.css';

export default function GalleryItem({id, description, path, likes, getImages}) {
    const [showDesc, setShowDesc] = useState(false);
    
    const handleLikeClick = () => {
        // TODO: axios PUT   put like count incremented /gallery/like/:id
        axios.put(`/gallery/like/${id}`, id)
          .then( (response) => {
            console.log('handleLikeClick response:', response);
            // The actual array comes from the data attribute on the response
            console.log('handleLikeClick data:', response.data);
      
            // refresh image list
            getImages();
          })
          .catch(function (error) {
            console.log('Error on put:', error);
          });
      
        console.log('handle like click');
    }

    return (
        <li className='gallery-item'>
            <div 
                className='gallery-image-container'
                onClick={() => {
                    setShowDesc(!showDesc)
                }}
            >
                <img 
                    className='gallery-image'
                    src={path}
                    alt={description}
                />
                {/* like an if statement */}
                {showDesc && (
                    <div className='desc-bkgd'>
                        <div className='description'>
                            {description}
                        </div>
                    </div>
                )}
            </div>
            <button 
                type="button"
                className='btn-like'
                onClick={() => handleLikeClick()}
            >
                Love it! 🤍
            </button>
            <div className='likes'>
                {likes ?
                    `${likes} ${likes > 1 ? 'people' : 'person'} love${likes === 1 ? 's' : ''} this!` :
                    'No people love this 😞'
                }
            </div>
        </li>
    );
};
