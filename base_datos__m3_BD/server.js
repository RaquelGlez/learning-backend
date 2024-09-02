// SequelizeJS

const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const sequelize = new Sequelize('proyecto-backend', null, null, {
  dialect: 'sqlite',
  storage: './proyecto-backend'
})

app.post('/pendientes', function (req, res) {
  // db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description)

  res.send('Inserción finalizada')
})

app.listen(3000)

/* 



































*/

//etapa 3 - sanitize

/* 
const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

let db = new sqlite3.Database('proyecto-backend')

app.post('/pendientes', function (req, res) {
  // db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`)

  db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description)

  res.send('Inserción finalizada')
})

app.listen(3000)

process.on('SIGINT', function () {
  console.log('Adios - atte. El servidor')

  db.close()
  process.exit()
})

*/

//Etapa 2
/* 
const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

let db = new sqlite3.Database('proyecto-backend')

app.post('/pendientes', function (req, res) {
  db.run("INSERT INTO tasks(description) VALUES('Hola mundo')")

  res.send('Inserción finalizada')
})

app.listen(3000)

process.on('SIGINT', function () {
  console.log('Adios - atte. El servidor')

  db.close()
  process.exit()
})


*/

// Etapa 1
/* const sqlite3 = require('sqlite3')

let db = new sqlite3.Database('proyecto-backend')

db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))')

db.close() */
