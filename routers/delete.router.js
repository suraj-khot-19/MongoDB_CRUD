import express from 'express'
import Product from '../model/product.model.js';

const router = express.Router();

router.delete('/delete/:name', async (req, res) => {
    try {
        const name = req.params.name
        await Product.deleteOne({ name }) ///focus
        res.status(200).json({
            msg: 'Product deleted successfully!',
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router