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

app.post("/user", async (req, res) => {
    const user = await User.findOne({email: req.body.params.email}).select("email").lean();
    if (user) {
        await User.updateOne({
            displayName: req.body.params.displayName,
            email: req.body.params.email,
            uid: req.body.params.uid,
            photoURL: req.body.params.photoURL
    });
    }
    else {
        await User.create({
            displayName: req.body.params.displayName,
            email: req.body.params.email,
            uid: req.body.params.uid,
            photoURL: req.body.params.photoURL
    });
    }
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