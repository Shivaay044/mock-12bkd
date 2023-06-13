const mongoose = require("mongoose")


const jobSchema = mongoose.Schema({
    company:String,
    posted_At:String,
    city:String,
    location:String,
    role:String,
    level:String,
    position:String,
    language:String,
    contract:String
})

const jobModel = mongoose.model("job",jobSchema)


module.exports = jobModel