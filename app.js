// require related modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatorPassword = require('./generate_password')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// setting port
const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatorPassword(options)
  res.render('index', { password: password, options: options })
})

// start server
app.listen(port, () => {
  console.log(`This Express server is started on http://localhost${port}`)
})