const Feeds=require('../../db').Feeds
const route=require('express').Router()
route.get('/',(req,res)=>{
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
    Feeds.create({
        title:req.body.title,
        content:req.body.content
    }).then((feeds)=>{
        res.status(201).send(feed)
    }).catch((error)=>{
        res.status(501).send({
            error:"error adding feeds"
        })
    })
})
route.post('/:id',(req,res)=>{
    console.log(req.params.id)
    Feeds.destroy({
        where :{
            id:req.params.id
        }
    })
})




exports = module.exports = route