import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import GalleryList from '../GalleryList';
import './App.css';

function App() {
  const [imageList, setImageList] = useState([]);

  const getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( (response) => {
      console.log('Entire response:', response);
      // The actual array comes from the data attribute on the response
      console.log('Just the data:', response.data);

      // Set data into component state
      setImageList(response.data);
    })
    .catch(function (error) {
      console.log('Error on get:', error);
    });
  };

  useEffect( () => {
    getImages();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          imageList={imageList} 
          getImages={getImages}
        />
      </div>
    );
}

export default App;
