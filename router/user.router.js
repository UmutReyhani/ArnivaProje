const express=require('express')
const router=express.Router()
const User=require('../models/user')

router.get("/",(req,res)=>{
    User.findAll().then((users)=>res.json({status:"success",users})).catch((err)=>res.json({status: "error", err}))
})

router.get("/:id",(req,res)=>{
    User.findOne({where: {id: req.params.id}}).then((user)=>res.json({status: "success", user})).catch((err)=>res.json({status: "error", err}))
})

router.delete("/:id",(req,res)=>{
    User.destroy({where: {id: req.params.id}}).then(()=>res.json({status:"success",  message: "user silindi"})).catch((err)=>res.json({status: "error", err}))
})

router.post("/",(req,res)=>{
   User.create(req.body).then(()=>res.json({status:"success", message: "user olusturuldu"})).catch((err)=>res.json({status: "error", err}))
})

module.exports=router