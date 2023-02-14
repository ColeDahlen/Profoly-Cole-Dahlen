import './ForumItem.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
function ForumItem({forum}){
    const history = useHistory()
    const allUsers = useSelector((store) => store.allUserReducer)
    const [username, setUsername] = useState('')
    const [arrayOfComments, setArrayOfComments] = useState([])
    let emptyArray = [...arrayOfComments];
    const changeIdsToNames = () =>{
        console.log('$$$$$$$$$$$', forum)
        for(let comment of forum.comments){
            let commenters = {
                text: comment.text,
                username: ''
            }
            for(let user1 of allUsers ){
                if(comment.user === user1.id){
                    commenters.username = user1.username
                    emptyArray.push(commenters)
                    setArrayOfComments(emptyArray)
                }
            }
        }
        for(let user2 of allUsers){
            if(forum.forum_user === user2.id){
                setUsername(user2.username)
            }
        }
    }
    console.log(arrayOfComments)
    useEffect(() => {
        changeIdsToNames()
      }, []);
     
    return(
        <div>
            <img className='pictures rounded' src={forum.picture_url} alt={forum.picture_name} />
            <div>Artist: {username}</div>
            <div>Comments: 
            {
                arrayOfComments.map((comment) =>{
                    return (
                        <div>{comment.username}: {comment.text}</div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ForumItem;