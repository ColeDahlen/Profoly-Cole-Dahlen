import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageItems from './ImageItems';

function GalleryPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SAGA-GET-PICTURES',
      payload: user.id
    })
  }, []);
  const user = useSelector((store) => store.user)
  const images = useSelector((store) => store.imagesReducer);
  return (
    <div className="container">
      {
        images.map((image) =>{
          return <ImageItems image={image} />
        })
      }
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GalleryPage;
