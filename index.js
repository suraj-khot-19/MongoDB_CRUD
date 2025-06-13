const express = require("express")

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log("app is listing to ",port)
})

app.get("/", (req, res) => {
    res.send({
        msg:"Welcome to app."
    })
});

