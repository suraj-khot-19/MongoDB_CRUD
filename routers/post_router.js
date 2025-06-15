import express from 'express'


const router = express.Router();


router.post("/add", (req, res) => {
    const data = req.body;
    console.log(data)
    res.send({
        msg: data,
        status: "OK"
    })
})

export default router;