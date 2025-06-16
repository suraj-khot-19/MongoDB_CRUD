import express from 'express'
import product from '../model/product.model.js';

const router = express.Router();

router.get("/all", async (req, res) => {

    try {
        const data = await product.find();
        res.status(200).send({
            msg: "Data fetched Successfully!",
            data
        })
    } catch (error) {
        res.status(500).send({
            msg: error.message
        })
    }
});

export default router