const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();


const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



app.use("/",(req, res) => {
    request(`https://api.deezer.com/search?q=${req.path.slice(1)}`, (error, response, body) => {
        res.send(body)
    })
})
// app.use("/", (req, res) => {

//     console.log(req)
// })

