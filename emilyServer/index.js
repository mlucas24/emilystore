let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");

let app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

//routes
app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/test', (req, res) => {
    res.send('test passed!')
})

const PORT = process.env.PORT || 2424;
app.listen(PORT, () => {
    console.log("express listening on port", PORT)
});

module.exports = app;