const express = require("express");
const morgan = require("morgan");
const app = express()

const PORT = '3001';

app.use(morgan("dev"));

// health route 

app.get("/helth", (req, res)=> {
    res.status(200).send({
        status: "your API is working fine"
    })
})

// home route 

app.get("/", (req, res)=> {
    res.status(200).send({
        message: "Hello World Programmers how are you boys..",
        body: " your project is running.. "
    })
})


// products route 

app.get("/products", (req, res)=> {
    res.status(200).send({
        products: " Here is your all products.. "
    })
})



app.listen(PORT, ()=> {
    console.log(`Your server is running port https://localhost:3001`)
})

