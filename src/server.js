const express = require('express')
const dotenv = require('dotenv')
const hbs = require('hbs')
const path = require('path')
const routes = require('../routes/index')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT

// Getting Directories
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../views/templates')

// Setting Directories
app.use(express.static(publicDirectory))

// Setting HBS as View Engine
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)

// Routes
app.use('/', routes)

app.listen(PORT || 3000, () => {
	console.log(`App is up on PORT ${PORT}`)
})
