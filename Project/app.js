const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
const fs = require('fs')
var session = require('express-session')
var ejs=require('ejs')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views') )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    'secret': 'session1'
}))

if(process.env.PORT){
    app.listen(process.env.PORT,function(){console.log('server started')})
}
else{
    app.listen(3000,function(){console.log('server started on port 3000')})
}



//get and post requests

app.get('/',function(req,res){
    res.render('login')
}
)
app.get('/registration',function(req,res){
    res.render('registration')
})

app.get('/action',function(req,res){
    res.render('action')
}
)
app.get('/conjuring',function(req,res){
    res.render('conjuring')
}
)
app.post('/conjuring',function(req,res){
    if(!movieInWatchlist(req.session.username,"The Conjuring (2013)"))
    {
        addToWatchlist(req.session.username,"The Conjuring (2013)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)

app.get('/darkknight',function(req,res){
    res.render('darkknight')
}
)
app.post('/darkknight',function(req,res){
    if(!movieInWatchlist(req.session.username,"The Dark Knight (2008)"))
    {
        addToWatchlist(req.session.username,"The Dark Knight (2008)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)


app.get('/drama',function(req,res){
    res.render('drama')
}
)
app.get('/fightclub',function(req,res){
    res.render('fightclub')
}
)

app.post('/fightclub',function(req,res){
    if(!movieInWatchlist(req.session.username,"Fight Club (1999)"))
    {
        addToWatchlist(req.session.username,"Fight Club (1999)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)

app.get('/godfather',function(req,res){
    res.render('godfather')
}
)

app.post('/godfather',function(req,res){
    if(!movieInWatchlist(req.session.username,"The Godfather (1972)"))
    {
        addToWatchlist(req.session.username,"The Godfather (1972)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)

app.get('/godfather2',function(req,res){
    res.render('godfather2')
}
)

app.post('/godfather2',function(req,res){
    if(!movieInWatchlist(req.session.username,"The Godfather: Part II (1974)"))
    {
        addToWatchlist(req.session.username,"The Godfather: Part II (1974)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)


app.get('/home',function(req,res){
    res.render('home')
}
)
app.get('/horror',function(req,res){
    res.render('horror')
}
)
app.get('/scream',function(req,res){
    res.render('scream')
}
)

app.post('/scream',function(req,res){
    if(!movieInWatchlist(req.session.username,"Scream (1996)"))
    {
        addToWatchlist(req.session.username,"Scream (1996)")
        res.send(500 , 'Added to watchlist');
    }
    else
    {
        res.send(500 , 'Added before to the watchlist');
    }
}
)

app.get('/searchresults',function(req,res){
    res.render('searchresults')
}
)

app.post('/search' , function(req,res) {
    res.render('searchresults' , {searchedMovies: searchMovies(req.body.Search)})
})

app.get('/watchlist',function(req,res){
    var movies = loadUserWatchlist(req.session.username)
    res.render('watchlist' , {myWatchlist:movies})
}
)

app.post('/',function(req,res){
    var name=req.body.username
    var pass=req.body.password
    let passArray=loadpass()
    let nameArray=loadnames()
    var index=-1
    for(var i=0;i<nameArray.length;i++){
        if(nameArray[i]==name){
            index=i;
            break;
        }    
    }
    if(index==-1)
    res.send(500,'wrong username or password')
    else
    if(passArray[index]!=pass)
    res.send(500,'wrong username or password')
    else{
    req.session.username = req.body.username;    
    res.redirect('/home');
    }
}
)    

app.post('/register',function(req,res){
    if(newUser(req.body.username,req.body.password)){
        res.redirect('/')
    }
    else{
       res.send(500,'name exists')
   }    
   })
   

//functions

let loadnames = function(){
    try {
        let bufferedData = fs.readFileSync('name.json')
        let dataString = bufferedData.toString()
        let nameArray = JSON.parse(dataString)
        return nameArray
    } catch (error) {
        return []
    }
}    

let loadpass = function(){
    try {
        let bufferedData = fs.readFileSync('pass.json')
        let dataString = bufferedData.toString()
        let passArray = JSON.parse(dataString)
        return passArray
    } catch (error) {
        return []
    }
}  

let newUser=function(user,pass){
    var f=true
    var added=false
    let passArray=loadpass()
    let nameArray=loadnames()
    let watchlist=loadWatchlist()
    for(var i=0;i<nameArray.length;i++){
        if(nameArray[i]==user)
            f=false
    }
    if(f){
        added=true
        nameArray.push(user)
        passArray.push(pass)
        watchlist.push({username:user,list:[]})
        fs.writeFileSync('watchlist.json', JSON.stringify(watchlist))
        fs.writeFileSync('name.json', JSON.stringify(nameArray))
        fs.writeFileSync('pass.json', JSON.stringify(passArray))
    }
   return added
}
let loadWatchlist = function() {
    let buffereddata = fs.readFileSync('watchlist.json')
    let stringdata = buffereddata.toString()
    let watchlist = JSON.parse(stringdata)
   
    return watchlist;
}

let loadUserWatchlist = function(username) {
    let watchlist = loadWatchlist()
    let userWatchlist = []
    for(var i=0 ; i<watchlist.length ; i++) {
        if(watchlist[i].username==username){
            userWatchlist = watchlist[i].list;
            break;
        }
    }
    return userWatchlist
}
let movieInWatchlist = function(username,movie) {
    let userWatchlist = loadUserWatchlist(username)
    if (userWatchlist.includes(movie)) {
        return true
    }
    return false
}

let addToWatchlist = function(username,movie) {
    let watchlist = loadWatchlist();
    let userWatchlist = loadUserWatchlist(username);
    if (!userWatchlist.includes(movie)) {
        userWatchlist.push(movie)
        for(var i=0 ; i<watchlist.length ; i++) {
            if(watchlist[i].username==username){
                watchlist[i].list = userWatchlist;
            }
        }
    }
    fs.writeFileSync('watchlist.json',JSON.stringify(watchlist));
}

let loadMovies = function() {
    let buffereddata = fs.readFileSync('movieList.json')
    let stringdata = buffereddata.toString()
    let movies = JSON.parse(stringdata)
   
    return movies;
}

let searchMovies = function(movie) {
    let moviesArray = loadMovies()
    let searchResult = []
    let movieLower = movie.toLowerCase();
    for( var i=0 ; i<moviesArray.length ; i++)
    {
        if(moviesArray[i].toLowerCase().includes(movieLower)){
            searchResult.push(moviesArray[i])
        }
    }
  return searchResult
}
