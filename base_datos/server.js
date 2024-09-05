const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')
const session = require('express-session')

const socketio = require('socket.io')

const app = express()

const tasksRoutes = require('./routes/tasks_routes')
const registrationsRoutes = require('./routes/registrations_routes')
const sessionsRoutes = require('./routes/sessions_routes')
const categoriesRoutes = require('./routes/categories_routes')

const findUserMiddleware = require('./middlewares/find_user')
const authUser = require('./middlewares/auth_user')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.set('view engine', 'pug')

app.use(
  session({
    secret: ['12iasdhasjdasdhbasjd', '123yhuasdgasdjkznxcjxzkh1y23'],
    saveUninitialized: false,
    resave: false
  })
)

app.use(findUserMiddleware)
app.use(authUser)

app.use(tasksRoutes)
app.use(registrationsRoutes)
app.use(sessionsRoutes)
app.use(categoriesRoutes)

app.get('/', function (req, res) {
  res.render('home', { user: req.user })
})

let server = app.listen(3000)

let io = socketio(server)

let usersCount = 0

io.on('connection', function (socket) {
  usersCount++

  io.emit('count_updated', { count: usersCount })

  socket.on('disconnect', function () {
    usersCount--

    io.emit('count_updated', { count: usersCount })
  })
})

const client = require('./realtime/client')
