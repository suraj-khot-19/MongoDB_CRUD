import express from 'express'
import Product from '../model/product.model.js';

const router = express.Router();

router.get('/name/:name', async (req, res) => {
    try {
        const name = req.params.name
        const product = await Product.find({ name })

        res.status(200).json({
            msg: "Data Fetched Successfully",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router