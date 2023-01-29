import React from 'react';
import GalleryItem from './GalleryItem';
import './GalleryList.css';

export default function GalleryList({imageList, getImages}) {
    console.log('GalleryList, imageList', imageList)
    return (
        <ul className='gallery-list'>
            {imageList.map(({id, description, path, likes}) => {
                return (
                    <GalleryItem
                        key={id}
                        id={id}
                        description={description}
                        path={path}
                        likes={likes}
                        getImages={getImages}
                    />
                );
            })}
        </ul>
    );
};

