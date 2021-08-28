const { isValidObjectId } = require("mongoose");

const mongoose = require(mongoose);
const Schema=mongoose.Schema;

const teacherSchema= new Schema({
    name:{fName:String,lName:String},
    loginInfo:[{
        email:{
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: true },
      },
      Password:{ type: String, required: true }
    }],
    department_id:mongoose.ObjectId, 
    created_at:{ type: Date, default: Date.now }
})
const Teacher = mongoose.model("teacher",teacherSchema);
//export
module.exports=Teacher;