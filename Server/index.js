const express = require("express");
const cors = require("cors");
const pool = require('./database');
const app = express();
const PORT = 5000;
// import router 
const router = require("./routes/candidatesRoutes");

// middlewares
app.use(express.json());
app.use(cors());

// All Routes 
app.use('/candidates' , router) ;

// Server Configuration

app.get('/' , async(req,res)=>{
    res.json({ op :'Server Started'}) ;
})

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
 