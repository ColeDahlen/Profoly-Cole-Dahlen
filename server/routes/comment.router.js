const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.post('/', rejectUnauthenticated, (req, res) => {
  let userId = req.user.id
  
  let sqlQuery = `
    INSERT INTO "comments"
    ("user_id", "comment", "forum_id")
    VALUES
    ($1, $2, $3);
  `
  let sqlValues = [userId, req.body.comment, req.body.id]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) =>{
      res.sendStatus(200)
    })
    .catch((dbErr) =>{
      console.log('COMMENT POST SERVER SIDE ERROR:', dbErr)
      res.sendStatus(500)
    })
});

module.exports = router;
