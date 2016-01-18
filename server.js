/**
 * Created by developer on 17.01.16.
 */

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/webapp"));

app.listen(1901, function(){
    console.log("run is localhost:1234")
});

