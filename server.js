/*
const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hola mundo, desde express')
})

app.listen(3000)
 */

// Postman

/* 
const express = require('express')

const app = express()

app.get('/saludo', function (req, res) {
  res.send(`Hola ${req.query.name}`)
})

app.listen(3000) */

//Datos con POST
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', function (req, res) {
  res.send(`Hola ${req.body.name}`)
})

app.listen(3000)
