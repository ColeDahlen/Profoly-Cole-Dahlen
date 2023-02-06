const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id',rejectUnauthenticated,(req, res) => {
  const userId = req.params.id
  let sqlQuery = `
  SELECT * FROM "gallery"
  WHERE "user_id" = $1;
  `
  let sqlValues = [userId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) =>{
      res.send(dbRes.rows)
    })
    .catch((dbErr) =>{
      console.log('/api/images GET ERROR:', dbErr)
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  let userId = req.user.id
  let sqlQuery = `
  INSERT INTO "gallery"
	("picture_url", "picture_name", "picture_description", "user_id")
	VALUES
	($1, $2, $3, $4);
  `
  let sqlValues = [req.body.url, req.body.name, req.body.description, userId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) =>{
      res.sendStatus(200)
    })
    .catch((dbErr) =>{
      console.log('IMAGE POST SERVER SIDE ERROR:', dbErr)
      res.sendStatus(500)
    })
});

module.exports = router;
