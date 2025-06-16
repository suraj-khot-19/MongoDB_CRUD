import express from 'express'
import connectMongo from './db.js';
import post from './routers/post_router.js'
import welcome from './routers/welcome.js'
import createProduct from './routers/create.router.js'
import allProducts from './routers/all.router.js'
import byName from './routers/byName.router.js'
import deleteByName from './routers/delete.router.js'
import updateProduct from './routers/update.router.js'

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
app.use('/api/rowdy', byName)
app.use('/api/rowdy',deleteByName)
app.use('/api/rowdy',updateProduct)