const express = require('express')
const app = express()
const route = require('./route/route.js');
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/mubashir-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use(
//     function (req,res,next){
//         console.log(moment().format('YYYY-MM-DD HH:mm:ss'),',',req.ip,',',req.method,',',req.path);
//         next();
//     }
// );

app.use('/',route);

app.listen(process.env.PORT || 3000, (err)=> {
    console.log("Connected to PORT 3000")
});