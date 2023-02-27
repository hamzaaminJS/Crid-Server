const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const http = require('http')
const path = require('path')

const cors = require('cors')

// Load env vars
dotenv.config({path: './config/config.env'})


connectDB()

// Route files
const emailAuth = require('./routes/emailAuth')

const app = express()
const server = http.createServer(app)


// allowing things
app.use(cors())

// Body Parser
app.use(express.json({limit: '25mb'}))

// Mounting Routers
app.use('/emails', emailAuth)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`))