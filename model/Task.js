import mongoose from "mongoose";
import Users from "./Users.js";

const Task = new mongoose.Schema({
    author: {type: String, require: true},
    userAssigned: {type: String, ref: Users,require: true},
    taskDescription: {type: String, require: true},
    date: {type: String, require: true},
    status: {type: String, require: true}
})

export default mongoose.model("Task",Task)