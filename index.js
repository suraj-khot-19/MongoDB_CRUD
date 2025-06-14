import express from 'express'
import connectMongo from './db.js';

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log("app is listing to ",port);
    connectMongo(); // mongodb fn call
})

app.get("/", (req, res) => {
    res.send({
        msg:"Welcome to app."
    })
});

