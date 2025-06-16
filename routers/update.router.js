import express from "express";
import Product from "../model/product.model.js"

const router = express.Router()

router.put('/update/:name', async (req, res) => {
    try {
        const nameId = req.params.name

        const { name, price, quantity } = req.body

        const product = await Product.findOne({ name: nameId })

        if (product == null) {
            res.status(400).json({
                msg: 'Product Not Found!'
            })
            return;
        }

        if (name) {
            //check
            const byNameProduct = await Product.findOne({ name })
            if (byNameProduct != null) {
                res.status(400).json({
                    msg: 'Product Already Exists with this name',
                    product: byNameProduct
                })
                return;
            } else {
                product.name = name
            }
        }
        if (price) {
            product.price = price
        }
        if (quantity) {
            product.quantity = quantity
        }

        await product.save()

        res.status(200).json({
            msg: 'Product Updated Succesfully',
            product
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router