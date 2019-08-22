const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users
const path = require('path')
//const Feeds=require('../db').Feeds
route.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname , '../public','signup.html'));
   // console.log(path.join(__dirname + '../../public'+'/index.html'))
})
route.post('/signup', (req, res) => {
    Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstname:req.body.firstname,
      lastname: req.body.lastname,
      phoneno:req.body.phoneno,
      password:req.body.password
    })
      .then((user) => {
        console.log(user)
        res.sendFile(path.join(__dirname , '../public','login.html'));
      })
      .catch((err) => {
        console.error(err)
        res.sendFile(path.join(__dirname , '../public','signup.html'));
      })
  })
//   route.get('/feeds',(req,res)=>{
//     // res.setHeader('Content-Type', 'text/html');
//     // res.sendFile(path.join(__dirname , '../../public','feeds.html'));
//     if (req.user) {
//         res.sendFile(path.join(__dirname , '../../public','feeds.html'))
//         Feeds.findAll()
//         .then((feeds)=>{
//             res.status(200).send(feeds);
//           // res.status(200).send(feeds)
//           //res.sendFile(path.join(__dirname , '../../public','feeds.html'));
//         //   res.statusCode = 404;
//         //   res.send(feeds)
//         }).catch((err)=>{
//             res.status(500).send({
//                 error:"cannot retrieve"
//             })
//         })
//     }else{
//     res.redirect('/api/login')}
//     // Feeds.findAll()
//     // .then((feeds)=>{
//     //     res.status(200).send(feeds);
//     //   // res.status(200).send(feeds)
//     //   //res.sendFile(path.join(__dirname , '../../public','feeds.html'));
//     // //   res.statusCode = 404;
//     // //   res.send(feeds)
//     // }).catch((err)=>{
//     //     res.status(500).send({
//     //         error:"cannot retrieve"
//     //     })
//     // })

// })
// route.post('/feeds',(req,res)=>{
//     Feeds.create({
//         author:req.body.author,
//         content:req.body.content
//     }).then((feeds)=>{
//         res.send(feeds)
//     }).catch((error)=>{
//         res.send({
//             error:"error adding feeds"
//         })
//     })
// })
// route.post('/feeds/:id',(req,res)=>{
//     console.log(req.params.id)
//     Feeds.destroy({
//         where :{
//             id:req.params.id
//         }
//     })
// })


route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/file'
}))
// function checkLoggedIn(req, res, next) {
//     if (req.user) {
//         res.sendFile(path.join(__dirname , '../../public','feeds.html'))
      
//     }
//     res.redirect('/api/login')
//   }
  route.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname , '../public','login.html'));
})
route.get('/logout', function(req, res){
  req.logout();
  res.sendFile(path.join(__dirname , '../public','logout.html'));
});


exports=module.exports={
  route
  }
// const route = require('express').Router()
// route.use('/feeds', require('./feeds'))
// route.use('/log', require('./log'))



// exports = module.exports = {
//     route
// }


