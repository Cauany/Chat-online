//All  requires
const express = require('express')
const routes = express.Router()
const user = require('./src/controllers/user')

//Routes

//index
routes.get('/', function(req, res){
    return res.redirect("/login")
})
//Routes User
routes.get('/login', function(req, res){ return res.send("ok")})
routes.post('/register', user.post)
routes.post('/message', user.message)
routes.post('/message/show', user.showMessage)
routes.get('register', function(req, res){
    return res.send('Deu certo')
})
routes.get('/chat', user.get)

//Routes Consultant
routes.post('/createconsultant', user.consultant)
routes.get('/Loginconsultant', user.consultant)
    
//Route Delete
routes.delete('/deleteMessage', user.delete)
// routes.get('/login/Consultant', function (req, res){
//     res.send('Consultante')
// })

// routes.post('/register', function(req, res){
//     res.redirect('/')
// })

// routes.delete('/user/message', function(req, res){
//     res.send('Okay')
// })

//Exprots Routes
module.exports = routes