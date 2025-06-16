import express from 'express'
import connectMongo from './db.js';
import post from './routers/post_router.js'
import welcome from './routers/welcome.js'
import createProduct from './routers/create.router.js'
import allProducts from './routers/all.router.js'

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("app is listing to ", port);
    connectMongo(); // mongodb fn call
})

app.use(express.json()) //accept json as a body(middleware)
app.use("/post", post)
app.use('/', welcome)
app.use('/api/rowdy', createProduct)
app.use('/api/rowdy', allProducts)
