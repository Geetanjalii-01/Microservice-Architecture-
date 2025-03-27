const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const orders = [];

app.post("/order", (req, res) => {
    const order = { id: uuidv4(), userId: req.body.userId, item: req.body.item };
    orders.push(order);
    res.status(201).json(order);
});

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(4002, () => console.log("Order Service running on port 4002"));

