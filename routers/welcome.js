import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        msg: "Welcome to app."
    })
});

export default router;