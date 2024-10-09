const express = require("express");

const { userRouter } = require("./routes/users"); 
const { courseRouter } = require("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000);