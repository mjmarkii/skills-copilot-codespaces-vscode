// Create a web server
// Create a web server
const express = require('express')
const app = express()
const port = 3000

// Set the template engine
app.set('view engine', 'pug')

// Set the path for the static files
app.use(express.static('public'))

// Create a route
app.get('/', (req, res) => {
  res.render('index')
})

// Start and listen on the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})