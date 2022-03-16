let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");
const User = require("./DB/User");

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

app.post("/user/:displayName/:email/:uid/:photoURL", async (req, res) => {
    console.log("Im here")
    await User.create ({
        displayName: req.params.displayName,
        email: req.params.email,
        uid: req.params.uid,
        photoURL: req.params.photoURL
});
try {
    res.status(200).send("done");
} catch (err) {
    res.status(502).send(err);
}
})


const PORT = process.env.PORT || 2424;
app.listen(PORT, () => {
    console.log("express listening on port", PORT)
});

module.exports = app;