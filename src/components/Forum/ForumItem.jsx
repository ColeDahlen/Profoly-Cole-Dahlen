import './ForumItem.css'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import CommentForum from './CommentForum';
function ForumItem({forum}){
    const history = useHistory()
    const dispatch = useDispatch()
    const allUsers = useSelector((store) => store.allUserReducer)
    const user = useSelector((store) => store.user)
    useEffect(() => {
        changeIdsToNames()
    }, [forum.comments]);
    const [username, setUsername] = useState('')
    const [arrayOfComments, setArrayOfComments] = useState([])
    let emptyArray = [];
    const changeIdsToNames = () =>{
        for(let comment of forum.comments){
            let commenters = {
                text: comment.text,
                username: ''
            }
            for(let user1 of allUsers ){
                if(comment.user === user1.id){
                    commenters.username = user1.profile_name
                    emptyArray.push(commenters)
                    setArrayOfComments(emptyArray)
                }
            }
        }
        for(let user2 of allUsers){
            if(forum.forum_user === user2.id){
                setUsername(user2.profile_name)
            }
        }
        
    }
    const handleDeleteForum = () =>{
        dispatch({
            type: 'SAGA/DELETE_FORUM',
            payload: forum.id
        })
    }
    console.log(arrayOfComments)

    return(
        <div>
            <img className='pictures rounded' src={forum.picture_url} alt={forum.picture_name} />
            <div>Artist: {username}</div>
            {
                user.id === forum.forum_user ? <button className='btn btn-danger' onClick={handleDeleteForum}>Delete</button> : <div></div>
            }
            <div className='comments'>Comments: 
            {
                arrayOfComments.map((comment) =>{
                    return (
                        <div>{comment.username}: {comment.text}</div>
                    )
                })
            }
            <CommentForum forum={forum}/>
            </div>
        </div>
    )
}

export default ForumItem;