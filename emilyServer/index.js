let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./DB/index.js");
const User = require("./DB/User.js");

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
            photoURL: req.body.params.photoURL
    });
    }
    else {
        await User.create({
            displayName: req.body.params.displayName,
            email: req.body.params.email,
            photoURL: req.body.params.photoURL
    });
    }
try {
    res.status(200).send("done");
} catch (err) {
    res.status(502).send(err);
}
})
app.post("/item-maintenance", async (req, res) => {
    const item = await Item.findOne({itemName: req.body.params.itemName}).select("itemName").lean();
    if (item) {
        await Item.updateOne({
            itemName: req.body.params.itemName,
            description: req.body.params.description,
            price: req.body.params.price,
            mainPhotoURL: req.body.params.mailPhotoURL,
            photos: req.body.params.photos,
            quantity: req.body.params.quantity
        });
    } else {
        await Item.create({
            itemName: req.body.params.itemName,
            description: req.body.params.description,
            price: req.body.params.price,
            mainPhotoURL: req.body.params.mailPhotoURL,
            photos: req.body.params.photos,
            quantity: req.body.params.quantity
        });
    }
});


const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log("express listening on port", PORT)
});

module.exports = app;