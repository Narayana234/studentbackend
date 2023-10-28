const mongoose = require("mongoose")
const express = require("express")
const studentRoute = require("./studentRoutes/studentRoutes")
const cors = require("cors") 
const app = express()
mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://amlnarayana7207:123@lakshminarayana.ycb5k44.mongodb.net/School")
const db = mongoose.connection
db.on("open",() =>{
    console.log("db connected")
});

db.on("error",() =>{
    console.log("db error")
})

app.use(express.json())

app.use(cors())

app.use("/students",studentRoute)
const port = 5002
app.listen(port, () =>{
    console.log("Server connected")
})
