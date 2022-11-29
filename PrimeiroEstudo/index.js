const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')

dotenv.config()
connectToDatabase()
// const {Person} = require("./person");
// require('./modules/fs');

// require('./modules/path')
// // const person = new Person('Guilherme');

// //console.log(person.sayMyName())

// require('./modules/http');
require('./modules/express');



