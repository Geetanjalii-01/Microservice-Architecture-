app.post("/register", (req, res) => {
    const { name, email } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists!" });
    }

    const user = { id: uuidv4(), name, email };
    users.push(user);
    res.status(201).json(user);
});
   