/* const express = require('express')

const app = express() //con lo que definimos rutas

app.get('/', function (req, res) {
  //res.send(__dirname)

  res.sendFile('index.html', {
    root: __dirname
  })
})

app.listen(3000)
 */

/* const express = require('express')

const app = express()

//app.use(express.static('assets'))

//app.use('/public', express.static('assets'))
app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: __dirname
  })
})

app.listen(3000) */

//motores de vistas
/*const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)
 */

//caché de archivos estáticos
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(
  '/assets',
  express.static('assets', {
    etag: false,
    // maxAge: 172800000
    maxAge: '5h'
  })
)

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)
