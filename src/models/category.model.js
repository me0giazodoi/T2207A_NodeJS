const mongoose = require("mongoose");
const category_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:10,
        maxLength:255
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    description:String,
    thumbnail:{
        data:String,
        contentType:String
    }, 
    product:[{type: mongoose.Schema.Types.ObjectId,ref:'Product'}]
});

module.exports = mongoose.model("Category",category_schema);