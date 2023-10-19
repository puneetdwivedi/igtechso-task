const express = require("express");
const app = express();

const cors = require("cors");

const dbConnect = require("./database/connect");
const userRoutes = require("./src/routes/userRoutes");
const reviewRoutes = require("./src/routes/reviewRoute");

const port = 4000;

dbConnect();

// middle wares
app.use(express.json());
app.use(cors())


app.get("/", async(req, res)=>{
    console.log("hello");
    res.send("worknig fine")
})


app.use("/api/user", userRoutes);
app.use("/api/review", reviewRoutes)

app.listen(port, ()=>{
    console.log("Sever Started on " + port);
})
