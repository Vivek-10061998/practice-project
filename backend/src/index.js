const express = require('express');
const app = express();
const route = require('./route/routing.js');
const  mongoose  = require('mongoose');
const cors = require("cors");

app.use(express.json()); // For JSON requests
app.use(express.urlencoded({ extended: true })); // For URL-encoded form data
app.use(cors());

// mongoose.connect("mongodb+srv://pattamu:bqPvauaKLfc6SIBP@cluster0.eqx53.mongodb.net/Project-project", {
//     useNewUrlParser: true
// })
// .then(() => console.log("MongoDB is connected"))
// .catch(err => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 9999, () => {
    console.log("Connected to PORT 9999");
});
