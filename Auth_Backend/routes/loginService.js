//es7 logic
import express from 'express';
import Student from '../model/student.js';
const router = express.Router();

//restful logic
router.post("/rest/loginStudent",async(req,res)=>{
    try
    {
        const stuinfo = await Student.findOne({username:req.body.username});
        const stuinfo1 = await Student.findOne({password:req.body.password});
        if(stuinfo && stuinfo1)
        {
            const result = (req.body.password == stuinfo.password );
            res.json(result);
        }
    }
    catch(error)
    {
       res.json({error:"user not exist"});
    }
})

export default router;