const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,function(){ // callback function
    console.log("Server is running...");
})

// config session
const session = require("express-session");
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "t2207a123abcxyz",
        cookie: {
            maxAge: 3600000, // miliseconds
            secure: false
        }
    })
);

require("./src/db/datatabase");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const webrouter = require("./src/routes/web");
app.use("/",webrouter); 
const userrouter = require("./src/routes/user");
app.use("/auth",userrouter);
const productrouter = require("./src/routes/product.routes");
app.use("/product",productrouter);