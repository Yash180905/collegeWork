const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;
const classroomCourseSchema= new Schema({
    classroom_id:isValidObjectId,
    teacher_id:isValidObjectId,
    course_id:isValidObjectId,
    classroomStudent_id:isValidObjectId
})
const ClassroomCourse = mongoose.model("classroomCourse",classroomCourseSchema);
//export
module.exports=ClassroomCourse;