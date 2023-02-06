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
  const pictureId = req.params.id
  let sqlQuery = `
  SELECT * FROM "gallery"
  WHERE "id" = $1;
  `
  let sqlValues = [pictureId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) =>{
      res.send(dbRes.rows)
    })
    .catch((dbErr) =>{
      console.log('/api/details GET ERROR:', dbErr)
      res.sendStatus(500)
    })
});
router.put('/', rejectUnauthenticated, (req, res) =>{
    let sqlQuery = `
    UPDATE "gallery"
    SET "picture_name" = $1, "picture_description" = $2
    WHERE "id" = $3;
    `
    let sqlValues = [req.body.name, req.body.description, req.body.id]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200)
        })
        .catch((dbErr) =>{
            console.log('DETAIL EDIT SERVER SIDE ERROR:', dbErr)
            res.sendStatus(500)
        })
})
router.delete('/:id', rejectUnauthenticated, (req, res) =>{
    let sqlQuery = `
    DELETE FROM "gallery"
    WHERE id = $1;
    `
    let sqlValues = [req.params.id]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200)
        })
        .catch((dbErr) =>{
            console.log('DETAIL DELETE SERVER SIDE ERROR:', dbErr)
            res.sendStatus(500)
        })
})

module.exports = router;
