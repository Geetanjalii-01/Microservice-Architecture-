const express = require("express");

const app = express();
app.use(express.json());

app.post("/pay", (req, res) => {
    res.json({ message: `Payment of ${req.body.amount} successful for Order ID ${req.body.orderId}` });
});

app.listen(4003, () => console.log("Payment Service running on port 4003"));
