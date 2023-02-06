import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddPage(){
    const [urlInput, setUrlInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSave = () =>{
        let newObject = {
            url: urlInput,
            name: nameInput,
            description: descriptionInput,
            user_id: user.id
        }
        dispatch({
            type: 'SAGA/ADD_PICTURE',
            payload: newObject
        })
        history.push('/gallery')
    }
    return(
        <>
            <input placeholder="Enter in a valid picture url here!"
            value={urlInput}
            onChange={(event) => {setUrlInput(event.target.value)}}
            />
            <input placeholder="Enter in the name of your picture!"
            value={nameInput}
            onChange={(event) => {setNameInput(event.target.value)}}
            />
            <input placeholder="Enter in a detailed description of the picture here!"
            value={descriptionInput}
            onChange={(event) => {setDescriptionInput(event.target.value)}}
            />
            <button onClick={handleSave}>Save</button>
        </>
    )
}
export default AddPage