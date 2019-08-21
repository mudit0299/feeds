const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('./passport')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    session({
      secret: 'k2h4b 6k24h j6 b24kj6b 24kj6b 2',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60,
      },
    }),
  )
app.use(passport.initialize())
app.use(passport.session())


app.use('/', express.static(path.join(__dirname, 'public')))
//app.use('/signup', require('./routes/api/').route)
//app.use('/login', require('./routes/api/').route)
app.use('/', require('./routes/index').route)
app.use('/feeds',require('./routes/feeds').route)
app.use('/file',require('./routes/file').route)


app.listen(3300, () => console.log('Server started at http://localhost:3300'))