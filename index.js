const app = require("./app.js");
const PORT = 9976;

app.listen(PORT, err => {
    if (err) {
        console.error(err)
    } else {
        console.log(`Listening on PORT: ${PORT}`);
    }
})