import express from 'express';
import Student from '../model/student.js';
const router = express.Router();


//restful logic
router.post("/rest/registerStudents",async(req,res) =>{
    try{
       const studentInfo= new studentInfo(req.body);
       const student = await Student.save();
       res.json(student);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
})

export default router;