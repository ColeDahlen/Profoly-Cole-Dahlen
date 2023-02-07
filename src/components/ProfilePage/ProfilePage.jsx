import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProfilePage.css'
function ProfilePage() {
  const [uploadInput, setUploadInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [bioInput, setBioInput] = useState('')
  const [edit, setEdit] = useState(false)
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  console.log(user.profile_url)
  const handleSave = () =>{
    let profileObject = {
      profile_url: uploadInput,
      profile_name: nameInput,
      profile_bio: bioInput
    }
    if(user.profile_url){
      profileObject.profile_url = user.profile_url
    }
    if(user.profile_name){
      profileObject.profile_name = user.profile_name
      
    }
    if(user.profile_bio){
      profileObject.profile_bio = user.profile_bio
      
    }
    dispatch({
      type: 'SAGA/UPDATE_USER',
      payload: profileObject
    })
  }
  const handleEdit = () =>{
    setEdit(!edit)
  }
  const handleEditSave = () =>{
    let profileObject = {
      profile_url: uploadInput,
      profile_name: nameInput,
      profile_bio: bioInput
    }
    dispatch({
      type: 'SAGA/UPDATE_USER',
      payload: profileObject
    })
  }
  if(edit === false){
    return (
      <div className="container">
        {
          !user.profile_url ? (
          <div><input 
          placeholder='Enter in a valid image link for your profile image'
          value={uploadInput}
          onChange={(event)=> setUploadInput(event.target.value)}
          /></div>) : (<img className='profile_image' src={user.profile_url}/>)
        }
        {
          !user.profile_name ? (<div><input 
          placeholder='Enter your name' 
          value={nameInput}
          onChange={(event)=> setNameInput(event.target.value)}
          /></div>)
          : (<div>{user.profile_name}</div>)
        }
        {
          !user.profile_bio ? (<div><input
          placeholder='Type a bio about yourself'
          value={bioInput}
          onChange={(event)=> setBioInput(event.target.value)}
          /></div>) 
          : (<div>{user.profile_bio}</div>)
        }
        { (!user.profile_url || !user.profile_name || !user.profile_bio )
         ? <button onClick={handleSave}>Save</button> : <div></div> }
        {
          (user.profile_url || user.profile_name || user.profile_bio)
          ? <button onClick={handleEdit}>Edit</button> : <div></div>
        }
      </div>
    );
  } else {
    return (
      <div className="container">
        <input 
          placeholder='Enter in a valid image link for your profile image'
          value={uploadInput}
          onChange={(event)=> setUploadInput(event.target.value)} 
          />
        <input 
          placeholder='Enter your name' 
          value={nameInput}
          onChange={(event)=> setNameInput(event.target.value)}
          />
        <input
          placeholder='Type a bio about yourself'
          value={bioInput}
          onChange={(event)=> setBioInput(event.target.value)}
          />
        <button onClick={handleEditSave}>Save</button>
      </div>
    )
  }
  
}

export default ProfilePage;
