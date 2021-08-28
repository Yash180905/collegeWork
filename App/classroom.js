const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;
const classroomSchema=new Schema({
    clasroom_Name:{dep_name:String,year:Date,streame:String},
    teacher_cordinator:String,
    class_representative:mongoose.isValidObjectId,

});
const Classroom = mongoose.model("classroom",classroomSchema);
//export
module.exports=Classroom;