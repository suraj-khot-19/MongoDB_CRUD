import express from 'express'
import Product from '../model/product.model.js'

const router = express.Router();

router.post("/new", async (req, res) => {
    try {
        const data = req.body;

        //check
        const name = data.name
        const solo = await Product.findOne({ name });
        if (solo!=null) {
            res.status(400).json({
                msg: 'product alredy exist with same name',
                product: solo
            })
            return;
        }

        const product = await Product.create(data);
        res.status(201).json({
            msg: "Product Added Successfuly!",
            product
        })

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
});

export default router