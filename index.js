import express from 'express'
import mongoose from "mongoose";
import router from "./router/router.js";


const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.h3m0k4v.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true)
const app = express()

app.use(express.json({extended: true}))
app.use("/api", router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()

