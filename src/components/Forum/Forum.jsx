import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import ForumItem from './ForumItem'
function Forum(){
    const dispatch = useDispatch();
    let forums = useSelector((store) => store.forumReducer)
    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_ALL_USERS'
        })
        dispatch({
          type: 'SAGA/FETCH_POSTS'
        })
      }, []);
    return (
        <>
        <div className='d-flex parent'>
            {
                forums.map((forum) =>{
                    return <ForumItem key={forum.id} forum={forum} />
                })
            }
        </div>
        </>
    )
}
export default Forum