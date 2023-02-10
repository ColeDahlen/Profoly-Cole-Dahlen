import './ForumItem.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
function ForumItem({forum}){
    const history = useHistory()
    const allUsers = useSelector((store) => store.allUserReducer)
    let profile_name = '';
    let username = '';
    let arrayOfComments = [];
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
                    arrayOfComments.push(commenters)
                }
            }
        console.log('***************', arrayOfComments)
        }
    }

    useEffect(() => {
        changeIdsToNames()
      }, []);
     
    return(
        <div>
            <img className='pictures rounded' src={forum.picture_url} alt={forum.picture_name} />
            <div>Artist: {}</div>
        </div>
    )
}

export default ForumItem;