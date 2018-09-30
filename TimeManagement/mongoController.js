var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var encrypt = require('bcrypt');
var saltRounds = 10;
function checkUser(name, password) {
    var hashPass = "";
    encrypt.hash(password, saltRounds, function (err, hash) {
        hashPass = hash;
    });
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var user = dbo.collection("users");
        user.findOne({ username: name, password: hashPass }, function (err, doc) {
            if (err) throw err;
            if (doc) {
                console.log("User found");
            } else {
                user.insert({ username: name, password: hashPass });
                console.log("New user added")
            }
        });
        db.close()
    });
}

module.exports = {
    checkUser: checkUser
}