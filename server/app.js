const express = require('express');
const app = express();
const PORT = 5000

const customMiddleware = (req, res, next)=>{
    console.log("Middleware executed");
    next();
}

// app.use(customMiddleware)

//Middleware not use
app.get('/', (req, res) =>{
    console.log("home")
    res.send("Hello world!");
});

//Middleware use
app.get('/about',customMiddleware, (req, res) =>{
    console.log("about")
    res.send("about world!");
});



app.listen(PORT, () => {
    console.log("server is running on port ", PORT)
});