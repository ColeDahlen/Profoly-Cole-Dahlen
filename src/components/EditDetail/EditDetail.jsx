import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'

function EditDetail(){
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    console.log('params', params)
    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const user = useSelector((store) => store.user)
    const handleSave = () =>{
        let editObject = {
            id: params.id,
            user_id: user.id,
            name: nameInput,
            description: descriptionInput
        }
        dispatch({
            type:'SAGA/EDIT_DATABASE',
            payload: editObject
        })
        history.push('/gallery')
    }
    return(
        <>
        <input placeholder='Edit the Name of the picture' 
        value={nameInput} 
        onChange={e => setNameInput(e.target.value)}/>

        <input placeholder='Edit the Description of the picture' 
        value={descriptionInput}
        onChange={e => setDescriptionInput(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
        </>
    )
}
export default EditDetail;