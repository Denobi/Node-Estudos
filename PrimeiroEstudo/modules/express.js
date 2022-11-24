const express = require('express');

const app = express();

app.get('/home', (req,res)=>{
  res.status(200).send('<h1>HOME FROM EXPRESS </h1>')

})

const port = 8080;

app.listen(port, () => console.log(`RODANDO NA PORTA ${port}`)
)