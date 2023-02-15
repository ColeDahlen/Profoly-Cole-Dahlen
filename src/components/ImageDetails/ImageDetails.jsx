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
    const handlePost = () =>{
        dispatch({
            type: 'SAGA/FORUM_POST',
            payload: detail
        })
        history.push('/forum')
    }
    console.log('params', params)
    return(
        <div className='con'>
        <img className='details_picture' src={detail.picture_url} alt={detail.picture_name}/>
        <div className='details_name'>{detail.picture_name}</div>
        <div className='details_description'>{detail.picture_description}</div>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        <button className="btn btn-success" onClick={handlePost}>Post</button>
        </div>
    )
}
export default ImageDetails;