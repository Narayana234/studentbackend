const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {type : String},
    email : {type : String},
    password : {type:String}
},
{
    collection: "Students",
}
)

module.exports = mongoose.model("Students",studentSchema);