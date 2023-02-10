const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/',rejectUnauthenticated,(req, res) => {
  let sqlQuery = `
    SELECT 
        id,
        username,
        profile_url,
        profile_name,
        profile_bio
    FROM "user";
  `
  pool.query(sqlQuery)
    .then((dbRes) =>{
        const result = dbRes.rows;
        res.send(result)
    })
    .catch((dbErr) =>{
      console.log('/api/images GET ERROR:', dbErr)
      res.sendStatus(500)
    })
});

module.exports = router;
