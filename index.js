import express from "express"
import envv from "dotenv"
envv.config()

const server =express()
 server.get("/",(req,res)=>{
res.end("this is ddffata")
 })


server.listen(process.env.PORT,()=>{
   console.log("server started",process.env.PORT)
})
 