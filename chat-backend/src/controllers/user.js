const fs = require('fs')
const data = require('../../data.json')
const { dates } = require('../../utils')

//------- POST -------

//post create user
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    let { name, username, password } = req.body

    const id = Number(data.users.length + 1)

    data.users.push({
        id,
        name,
        username,
        password,
    })

    fs.writeFile("data.json", JSON.stringify(data,null,2), 
    function(err){
        if(err) return res.send("Arquivo não gravado")
        
        
        console.log(req.body)
        return res.send("ok")
    })

}

//post create consultant
exports.consultant = function(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    let { name, username, password } = req.body

    const id = Number(data.consultant.length + 1)

    const consultant = data.consultant.push({
        id,
        name,
        username,
        password,
    })

    fs.writeFile("data.json", JSON.stringify(data,null,2), 
    function(err){
        if(err) return res.send("Arquivo não gravado")
        
        console.log(consultant)

        return res.send("create")
    })

}

//post create message
exports.message = function(req,res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") return res.send('Por favor preencha todos os dados')
    }

    let{ text } = req.body

    const date = Date.now()
    const id = Number(data.message.length + 1)

    const msg = data.message.push({
        id,
        text,
        date,
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 
        function(err){
            if(err) return res.send("Arquivo não gravado")


            console.log(msg)
            return res.send("message ok")
        })
    
}

//------- GET -------
exports.get = function(req, res){

    const username = req.body

    const foundUser = data.users.find(
        function(user){
            return username == user.username
        })
    
        if(foundUser) return res.send('User not found!')

        const User = {
            ...foundUser,
        }

        return res.send("ok")
}

exports.showMessage = function(req, res){
    const { id } = req.params

    const foundMessage = data.message.find(
        function(message){
            return id == message.id
        })

        if(!foundMessage) return res.send('Message not found')

        return res.send('Enviada')
}

//------- DELETE -------
exports.delete = function(req, res){

    const allMessages = data.message.filter(
        function(message){
            return message != message
        })

        data.message = allMessages

        fs.writeFile("data.json", JSON.stringify(data, null, 2), 
        function(err){
            if(err) return res.send(" Write file error")
    
            return res.send('deletado')
        })

}