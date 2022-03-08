const express = require('express');
const useCaseWriter = require('../useCase/writer');



const router = express.Router();



router.get('/', async (req, res)=>{
    try {
        const allWriter = await useCaseWriter.getAll()

        res.json({
            success:true,
            message: 'All Writer', 
            data:{
                writers: allWriter
            }
        })
    } catch (error) {
        res.status(400)
        res.json({
            success:false,
            error: error.message,
            message: 'Writer not found'
        })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const writerData = req.body;
        const writerCreated = await useCaseWriter.signUp(writerData);
        
        
        res.json({
            success: true,
            message: 'create writer',
            data:{
                newWriter: writerCreated
            }
        })
    } catch (error) {
        res.json({
            message: 'error',
            success: false,
            error: error.message
        })
    }

})
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const token = await useCaseWriter.login(email, password)
        
        res.json({
            success: true,
            message: 'Writer logged In',
            data:{
                
                token
            }
        })


    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})
module.exports = router;