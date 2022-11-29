const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.get('/home', (req,res)=>{
  res.status(200).send('<h1>HOME FROM EXPRESS </h1>')

})

app.post('/users', (req,res)=>{
  const user = UserModel.create(req.body);

  res.status(201).json(user);

})

const port = 8080;

app.listen(port, () => console.log(`RODANDO NA PORTA ${port}`)
)