import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentForum({forum}){
    const [newComment, setNewCommentInput] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()
    const handleNewComment = () =>{
        let newCommentObject = {
            id: forum.id,
            comment: newComment
        }
        dispatch({
            type: 'SAGA/POST_COMMENT',
            payload: newCommentObject
        })
        setNewCommentInput('')
        history.push('/forum')
    }
    return(
        <div>
            <input placeholder="Enter in a comment!"
            value={newComment}
            onChange={(event) => {setNewCommentInput(event.target.value)}}
            />
            <button onClick={handleNewComment}>Submit</button>
        </div>
    )
}
export default CommentForum