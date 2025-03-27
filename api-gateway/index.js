const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const response = await axios.get("http://user-service:4001/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});
app.post("/register", async (req, res) => {
    try {
        const response = await axios.post("http://user-service:4001/register", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "User registration failed" });
    }
});

app.post("/order", async (req, res) => {
    try {
        const response = await axios.post("http://order-service:4002/order", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Order creation failed" });
    }
});

// Forward payment request
app.post("/pay", async (req, res) => {
    try {
        const response = await axios.post("http://payment-service:4003/pay", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Payment failed" });
    }
});

app.listen(4000, () => console.log("API Gateway running on port 4000"));
