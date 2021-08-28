const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;
const classroomStudentSchema= new Schema({
    classroom_id:isValidObjectId,
    student_id:isValidObjectId
})
const ClassroomStudent = mongoose.model("classroomStudent",classroomStudentSchema);
//export
module.exports=ClassroomStudent;