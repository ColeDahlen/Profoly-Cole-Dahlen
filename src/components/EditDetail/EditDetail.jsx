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
        <div className='form-group'>
        <input placeholder='Edit the Name of the picture' 
        className="form-control"
        value={nameInput} 
        onChange={e => setNameInput(e.target.value)}/>

        <input placeholder='Edit the Description of the picture' 
        className="form-control"
        value={descriptionInput}
        onChange={e => setDescriptionInput(e.target.value)}/>
        <button className='btn btn-success save' onClick={handleSave}>Save</button>
        </div>
    )
}
export default EditDetail;