import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    }
})
const Student = mongoose.model("student_infos",studentSchema);
export default Student;