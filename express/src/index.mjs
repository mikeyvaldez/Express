// the imported module is a  top level function
// so we need to call the function in order to create an express app
import express from 'express'; 


const app = express();  // we invoke the function to create an express instance

const PORT = process.env.PORT || 3000;


// we use a get request to respond with a status code of 201
// we also send a hardcoded hello message
app.get("/", (req, res) => {
    res.status(201).send({ msg: "Hello" });
});

// when we visti this route it will give us the array we see below
app.get("/api/users", (req, res) => {
    res.send([
        {id: 1, username: "benson", displayName: "Benson"},
        {id: 2, username: "kendra", displayName: "Kendra"},
        {id: 3, username: "leroy", displayName: "Leroy"},
    ]);
});

// when we visti this route it will give us the array we see below
app.get("/api/products", (req, res) => {
    res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});