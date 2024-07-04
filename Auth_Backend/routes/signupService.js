//es7 logic
import express from 'express';
import Student from '../model/student.js';
const router = express.Router();

//restful logic
router.post("/rest/registerStudent",async(req,res)=>{
    try{
         const stuinfo = new Student(req.body);
         const student = await stuinfo.save();
         res.json(student);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})

export default router;