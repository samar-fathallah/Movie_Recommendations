const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views') )

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function(){
    console.log('server is running')
})

var tasks1 = ['study networks', 'study db']

app.get('/', function(req,res){
    res.render('home', {
       tasks: tasks1
    })
})

app.post('/', function(req,res){
    console.log(req.body.task)
    tasks1.push(req.body.task)
    res.redirect('/')
})

