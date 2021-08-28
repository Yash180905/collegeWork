const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;

const courseSchema=new Schema({
    course_name:String,
    course_code:mongoose.Mixed
});
const Course = mongoose.model('courses',courseSchema);
//export
module.exports=Course;
