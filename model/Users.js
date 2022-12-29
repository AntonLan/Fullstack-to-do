import mongoose from "mongoose";

const Users = new mongoose.Schema({
    users: {type: Array, require: true},
})

export default mongoose.model("Users",Users)