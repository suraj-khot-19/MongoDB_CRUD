const express = require("express")

const app = express();

const port = 3000;

app.listen(port)

app.get("/", (req, res) => {
    res.send({
        msg:"app is listinig to port 3000"
    })
});

