const route=require('express').Router()
const path = require('path')
route.get('/',(req,res)=>{
    if(req.user){
        console.log("got it ")
         res.sendFile(path.join(__dirname , '../public','feeds.html'));
    }else{
    res.redirect('/login')
    }
})
exports=module.exports={
    route
    }