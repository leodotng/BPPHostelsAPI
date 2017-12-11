const express = require('express');

const router = express.Router();

const queries = require('../db/queries');


router.get('/', (req, res) => {
  queries.getHostels().then(hostels => {
    res.json(hostels);
  });
});

module.exports = router;