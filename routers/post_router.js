import express from 'express'


const router = express.Router();


router.post("/add", (req, res) => {
    try {
        const data = req.body;
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router;