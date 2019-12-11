const express = require('express');
const router = express.Router();
const {User} = require('../models');


router.get('/', (req, res) => {
    User.findAll()
        .then(user => {
            res.send(user)
        })
        .catch(e => console.log(e));
});

router.delete('/:id', (req, res) => {
    let ids = req.params.id;
    User.destroy({
      where: {
        id:ids
      }
    });
  })

module.exports = router; 