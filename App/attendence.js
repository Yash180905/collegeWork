const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;
const attendenceSchema= new Schema({
    classroomcourse_id:isValidObjectId,
    status:Boolean,
    date:Date,

})
const ClassroomCourse = mongoose.model("classroomCourse",classroomCourseSchema);
//export
module.exports=ClassroomCourse;