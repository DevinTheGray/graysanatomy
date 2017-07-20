const express = require('express')
const path = require('path')
const environment = process.env.NODE_ENV || 'development'

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const app = express();


app.use(express.static('./'))

app.get('/', function(req,res) {
  res.json()
})

// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'app.js'))
// })
const port =3001;
app.listen(port)
console.log("listening on port fuck you " + port)
