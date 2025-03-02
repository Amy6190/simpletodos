const express = require('express');
const app = express();
const mongoose = require('./config/db');
const cors = require('cors');
const taskroutes = require('./routes/taskroute');
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('node is running');
})

app.use('/api/tasks',taskroutes);

app.listen(5000, ()=>{
    console.log("listening on port 5000");
})