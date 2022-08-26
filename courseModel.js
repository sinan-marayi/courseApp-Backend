const mongoose = require('mongoose')

const courseModel = mongoose.model("courses",mongoose.Schema({
    courseTitle:{
        type:String,
        required:true
    },
    courseDuration:String,
    courseVenue:String,
    courseDate:String,
    courseDescription:String
}))

module.exports = {courseModel}