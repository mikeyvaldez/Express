// the imported module is a  top level function
// so we need to call the function in order to create an express app
import express from "express";

const app = express(); // we invoke the function to create an express instance

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "benson", displayName: "Benson" },
  { id: 2, username: "kendra", displayName: "Kendra" },
  { id: 3, username: "leroy", displayName: "Leroy" },
];

// we use a get request to respond with a status code of 201
// we also send a hardcoded hello message
app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello" });
});

// when we visti this route it will give us the array we see below
app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  // when filter and value are undefined
  if (!filter && !value) return res.send(mockUsers);
  if (filter && value)
    return res.send(mockUsers.filter((user) => user[filter].includes(value)));
});

// here we show the use of route paramaters
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId))
    return res.status(400).send({ msg: "Bad Request. Invalid ID." });

  const findUser = mockUsers.find((user) => user.id === parsedId);

  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

// when we visti this route it will give us the array we see below
app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
