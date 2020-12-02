const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const student = require("./routes/user");
const port = process.env.PORT||3001;
const app = express();

const server=http.createServer(app);

app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use("/user",user);

app.get("/",(req,res)=>{
   
});



server.listen(port,()=>{
    console.log("Sever started on "+ port + "!");
});