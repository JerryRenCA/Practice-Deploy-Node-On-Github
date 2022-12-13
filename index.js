const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("Working")
})

app.listen(8090,(err)=>console.log("Server is listenint on potr 8090"))