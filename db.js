const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ankitkumawat1508:ankit123@cluster0.hoabjrh.mongodb.net/coursify")
const admin = require("./routes/admin");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: {type:String , unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseScehma = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);

module.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
