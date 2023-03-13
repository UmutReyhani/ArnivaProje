const express=require('express')
const app=express()
const db=require('./config/database')
const userRouter=require('./router/user.router')
const bodyParser = require('body-parser')

app.use(bodyParser.json());


db.authenticate().then(()=>console.log("db baglandı")).catch((err)=>console.log(err))
app.use("/api/users",userRouter)

app.listen(3000,()=>{
    console.log("3000 port aktif.")
})
