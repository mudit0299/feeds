
const route=require('express').Router()
const Feeds=require('../db').Feeds
route.get('/',(req,res)=>{
    console.log("getting feeds")
    Feeds.findAll()
    .then((feeds)=>{
        res.status(200).send(feeds)
    }).catch((err)=>{
        res.status(500).send({
            error:"cannot retrieve"
        })
    })

})
route.post('/',(req,res)=>{
    console.log("stat db")
    console.log(req.body.author)
    Feeds.create({
    
        author:req.body.author,
        content:req.body.content,
        
    }).then((feed)=>{
        console.log("created")
        res.status(201).send(feed)
    }).catch((error)=>{
        res.status(501).send({
            error:"error adding feeds"
        })
    })
    console.log("end db")
})
route.post('/:id',(req,res)=>{
    console.log(req.params.id)
    Feeds.destroy({
        where :{
            id:req.params.id
        }
    })
})




exports=module.exports={
    route
    }