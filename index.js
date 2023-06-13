const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const jobRouter = require("./routes/job.route")
require("dotenv").config()
const app = express()



app.use(cors())
app.use(express.json())


app.get("/",async(req,res)=>{
    res.send("<h1>Hello</h1>")
})



app.use("/masai",jobRouter)





app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is running at ${process.env.PORT}`)
})