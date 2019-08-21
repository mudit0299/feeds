// const route = require('express').Router()
// const passport = require('../../passport')
// const Users = require('../../db').Users
// const path = require('path')
// route.get('/signup',(req,res)=>{
//     res.sendFile(path.join(__dirname , 'public','signup.html'));
//     //console.log(path.join(__dirname + '/public'+'/index.html'))
// })
// route.post('/signup', (req, res) => {
//     Users.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     })
//       .then((user) => {
//         console.log(user)
//         res.sendFile(path.join(__dirname , 'public','login.html'));
//       })
//       .catch((err) => {
//         console.error(err)
//         res.sendFile(path.join(__dirname , 'public','signup.html'));
//       })
//   })

// exports = module.exports = route


//----------------------------------------------------------------------
// const route = require('express').Router()
// const passport = require('../../passport')
// const Users = require('../../db').Users
// const path = require('path')
// //const Feeds=require('../../db').Feeds
// console.log(path.join(__dirname + '../../public'+'signup.html'))
// route.get('/signup',(req,res)=>{
//     res.sendFile(path.join(__dirname , '../../','public','signup.html'));
//     console.log(path.join(__dirname + '../../public'+'signup.html'))
// })
// route.post('/signup', (req, res) => {
//     Users.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//       firstname:req.body.firstname,
//       lastname: req.body.lastname,
//       phoneno:req.body.phoneno,
//       password:req.body.password
//     })
//       .then((user) => {
//         console.log(user)
//         res.sendFile(path.join(__dirname , '../../public','login.html'));
//       })
//       .catch((err) => {
//         console.error(err)
//         res.sendFile(path.join(__dirname , '../../public','signup.html'));
//       })
//   })

//   route.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname , '../../public','login.html'));
// })

// route.post('/login', passport.authenticate('local', {
//     failureRedirect: '/login',
//     successRedirect: '/feeds'
// }))
// // function checkLoggedIn(req, res, next) {
// //     if (req.user) {
// //       return next()
// //     }
// //     res.redirect('/login')
// //   }
// //   route.get('/login', (req, res) => {
// //     res.sendFile(path.join(__dirname , '../../public','login.html'));
// // })


// exports = module.exports = {
//     route
// }


