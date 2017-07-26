const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(allowCors)
app.use(queryParser())

app.listen(port, function(){
    console.log(`BACKEND is runing on port ${port}`)
})

module.exports = app