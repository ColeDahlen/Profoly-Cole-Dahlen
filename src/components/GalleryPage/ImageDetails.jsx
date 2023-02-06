import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
function ImageDetails(){
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ONE_IMAGE_DETAILS',
            payload: params.id
        })
    }, [params.id])
    console.log('params', params)
    return(
        <>
        test
        </>
    )
}
export default ImageDetails;