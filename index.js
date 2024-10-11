const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/users"); 
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://ankitkumawat1508:ankit123@cluster0.hoabjrh.mongodb.net/coursify");
    app.listen(3000);
    console.log("listening to port 3000");
}

main();