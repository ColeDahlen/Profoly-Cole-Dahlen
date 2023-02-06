import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'

import './ImageDetail.css'
function ImageDetails(){
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ONE_IMAGE_DETAILS',
            payload: params.id
        })
    }, [params.id])
    const detail = useSelector((store) => store.detailsReducer)
    const handleDelete = () =>{
        dispatch({
            type: 'SAGA/DELETE',
            payload: detail.id
        })
        history.push('/gallery')
    }
    const handleEdit = () =>{
        history.push(`/edit_details/${detail.id}`)
    }
    console.log('params', params)
    return(
        <>
        <img className='details_picture' src={detail.picture_url} alt={detail.picture_name}/>
        <div className='details_name'>{detail.picture_name}</div>
        <div className='details_description'>{detail.picture_description}</div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
        </>
    )
}
export default ImageDetails;