const express = require("express")
const jobModel = require("../model/job.model")
const jobRouter = express.Router()



jobRouter.post("/addjob",async(req,res)=>{
    console.log("hello")
    try {
       const newjob = new jobModel(req.body) 
       await newjob.save()
       res.status(200).send("job posted successfully!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})


jobRouter.get("/addjob",async(req,res)=>{
    console.log("hello")
    try {
       const newjob = await jobModel.find()
       res.status(200).send(newjob)
    } catch (error) {
        res.status(400).send(error.message)
    }
})











module.exports = jobRouter
