﻿var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("User collection created");
    });
    dbo.createCollection("projects", function (err, res) {
        if (err) throw err;
        console.log("Project collection created");
    });
    dbo.createCollection("neuralNets", function (err, res) {
        if (err) throw err;
        console.log("Neural net collection created")
        db.close()
    })
});