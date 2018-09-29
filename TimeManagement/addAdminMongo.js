var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var encrypt = require('bcrypt');
var saltRounds = 10;
var pass = "adminpass"
var secret = "";

//generate hash
encrypt.hash(pass, saltRounds, function (err, hash) {
    secret = hash;
});
console.log(secret);

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var initUsers = dbo.collection("users")
    initUsers.insert({ username: "admin", password: secret })
    db.close()
});