import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImageItems from './ImageItems';
import './GalleryPage.css'

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
    <>
    <div className="d-flex parent">
      {
        images.map((image) =>{
          return <ImageItems key={image.id} className="p-2" image={image} />
        })
      }
    </div>
    <div className="d-flex flex-row-reverse">
      <button type="button" className="btn btn-success p-2 add1" onClick={handleAdd}>Add</button>
    </div>
  
    </>
  );
}

export default GalleryPage;
