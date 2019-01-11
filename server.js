var express=require('express');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var databaseconfig=require('./config/database.config');
mongoose.connect(databaseconfig.url,{useNewUrlParser:true}).then
(()=>{console.log("database connected succesfully")
}).catch((error)=>{console.log(error)})

const app=express();

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
require('./routes/notes.routes')(app);
app.listen(3000,(()=>{console.log("app listen 3000 port")}))