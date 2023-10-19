const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/igtechso"

const dbConnect = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((res) => {
        // console.log(res);
        console.log("DB Connected Successfully");
    }).catch((err) => {
        console.log("error", err);
    })
}

module.exports = dbConnect;