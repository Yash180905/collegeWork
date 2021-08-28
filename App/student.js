const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require('mongoose-type-email');

const studentSchema= new Schema(({
    name:{fName:String,lName:string},
    rollNo:Number,
    email:{
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: true }
    },
    Classroom_id:mongoose.isValidObjectId
}));
const Student=mongoose.model('student',studentSchema);
//export
module.exports = Student;