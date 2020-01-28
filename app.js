const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "lack of documentation."
    });
});

module.exports = app;