const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/',rejectUnauthenticated,(req, res) => {
  let sqlQuery = `
SELECT 
    forum.id AS id,
    forum.user_id AS forum_user,
    "comments".user_id AS comment_user,
    "comments".id AS comment_id,
    forum.picture_url,
    forum.picture_name,
    forum.picture_description,
    "comments"."comment"
FROM forum
	LEFT JOIN "comments"
		ON forum.id = "comments".forum_id
GROUP BY "comments".id, forum.id;
  `
  pool.query(sqlQuery)
    .then((dbRes) =>{
        const result = dbRes.rows;
        let filterArray = [];
        for(let i = 0; i < result.length; i++){
            let idToCheck = result[i].id
            let newObject = {
                id: result[i].id,
                comments:[],
                forum_user: result[i].forum_user,
                picture_description: result[i].picture_description,
                picture_name: result[i].picture_name,
                picture_url: result[i].picture_url
            }
            for(let x = 0; x < result.length; x++){
                if(idToCheck === result[x].id){
                    let objectToPush = {
                        text: result[x].comment,
                        user: result[x].comment_user
                    }
                    newObject.comments.push(objectToPush)
                }
            }
            function isIdInArray(object){
                return object.id === newObject.id
            }
            const isObjectAlreadyInArray = filterArray.find(isIdInArray)
            if(!isObjectAlreadyInArray){
                filterArray.push(newObject)
            }
        }
        res.send(filterArray)
    })
    .catch((dbErr) =>{
      console.log('/api/images GET ERROR:', dbErr)
      res.sendStatus(500)
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  let userId = req.user.id
  let sqlQuery = `
  INSERT INTO "forum"
	("picture_url", "picture_name", "picture_description", "user_id")
	VALUES
	($1, $2, $3, $4);
  `
  let sqlValues = [req.body.picture_url, req.body.picture_name, req.body.picture_description, userId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) =>{
      res.sendStatus(200)
    })
    .catch((dbErr) =>{
      console.log('FORUM POST SERVER SIDE ERROR:', dbErr)
      res.sendStatus(500)
    })
});
router.delete('/:id', rejectUnauthenticated, (req, res) =>{
    let idToDelete = req.params.id
    let sqlQuery = `
    DELETE FROM "forum"
    WHERE id = $1;
    `
    let sqlValues = [idToDelete]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200)
        })
        .catch((dbErr) =>{
            console.log('FORUM DELETE SERVER SIDE ERROR:', dbErr)
            res.sendStatus(500)
        })
})
module.exports = router;
