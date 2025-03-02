const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDBs");
}).catch((err)=>{
    console.log("error",err);
});

module.exports = mongoose