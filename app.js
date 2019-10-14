const express = require('express')
    app = express(),
    db = require('./models/index')

//Models
app.get('/add',(req,res)=>{
    db['User'].create({
        firtsName: 'Cleiver',
        lastName: 'Valera Flores',
        email: 'cvalera@gmail.com',
        country: 'Peru'
    }).then(()=>{
        res.end('Created!!')
    })
})

app.get('/',(req,res)=>{
    db['User']
        .findAll()
        .then((users)=>{
            res.json(users.length)

            console.log(users.length)
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        })
})

app.listen(3000,()=>{
    console.log('Server running on 3000 port')//
})