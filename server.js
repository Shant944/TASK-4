const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.get("/test",function(rec,res){ 
    res.send("hello");
    
});

app.get("/test/das/",function(rec,res){
    res.sendFile(path.join(__dirname, "public","index.html"));
});

app.listen(4503);
