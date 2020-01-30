const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "lack of documentation."
    });
});

app.post("/", async (req, res) => {

    const { email, password } = req.body;
    res.status(201).json({
        message: "resource created",
        user: {
            email, password
        }
    });

});

app.put("/", async (req, res) => {
    const { } = req.body;
    res.status(200).json({
        path: "/",
        operation: "PUT",
        user: {
            password: "newpassword"
        }
    })
})

module.exports = app;