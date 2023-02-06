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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
