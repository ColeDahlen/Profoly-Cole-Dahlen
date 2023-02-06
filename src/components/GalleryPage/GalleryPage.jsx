import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImageItems from './ImageItems';

function GalleryPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({
      type: 'SAGA-GET-PICTURES',
      payload: user.id
    })
  }, []);
  const handleAdd = () =>{
    history.push('/add_picture')
  }
  const user = useSelector((store) => store.user)
  const images = useSelector((store) => store.imagesReducer);
  return (
    <div className="container">
      {
        images.map((image) =>{
          return <ImageItems image={image} />
        })
      }
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default GalleryPage;
