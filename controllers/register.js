const express = require('express');
const router = express.Router();
const cors = require('cors');
const {User} = require('../models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//const {User} = require('./models');


router.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  ); 


  router.use(bodyParser.json());
/*
  router.post('/', (req, res) => {
    let { username, password} = req.body;
    User.create({
      username,
      password
    }).then(() => {
      res.json({message: 'User inserted'})
    })
  })
*/
  router.post('/', async (req, res) => {
    let { email, password} = req.body;
    try {
      const hashedPaasword = await bcrypt.hash(password, 10);
      User.create({
        email,
        password: hashedPaasword
      }).then(() => {
        res.json({message: 'User inserted'})
      })
      
    } catch {
      res.redirect('/signup');
    }
  })
  

module.exports = router; 