//check that a user is present if not then add
async function checkUser(name, password) {
    var encrypt = require('bcrypt');
    //var crypto = require('crypto');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    
    var saltRounds = 10;
    var hashPass = await encrypt.hash(password, saltRounds);
    //var hashPass = crypto.createHash('sha256').update(password).digest('base64');

    try {
        await MongoClient.connect(url, async function (err, db) {
            var dbo = db.db("mydb");
            var user = await dbo.collection("users");
            await user.find({ username: name, password: hashPass }, async function (err, doc) {
                if (doc) {
                    console.log("User found");
                } else {
                    await user.insertOne({ username: name, password: hashPass });
                    console.log("New user added")
                }
            });
            await db.close();
        });
    }
    catch (err) {
        console.log('nice error message');
        await db.close();
    }
}

//add project to db
async function addProject(user, name, priority, length, date, status) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    status = 0;

    try {
        await MongoClient.connect(url, async function (err, db) {
            var dbo = db.db("mydb");
            var proj = await dbo.collection("projects");
            await user.insertOne({puser: user, pname: name, plength: length , ppriority: priority, pdate: date, premaining: length});
            await db.close();
            status = 1;
            return status;
        });
    }
    catch (err) {
        console.log('Project could not be added to db');
        await db.close();
    }
}

//update project remaining time
async function updateProject(user, name, timeTaken, status) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    status = 0;

    try {
        await MongoClient.connect(url, async function (err, db) {
            var dbo = db.db("mydb");
            var proj = await dbo.collection("projects");
            await proj.find({ puser: user, pname: name }, async function (err, doc) {
                if(doc){
                    var temp  = doc.premaining;
                    var newRemain = temp - timeTaken;
                    await proj.update(
                        {puser: user, pname: name},
                        {puser: doc.puser,pname: doc.pname, plength: doc.plength , ppriority: doc.ppriority, pdate: doc.pdate, premaining: newRemain}
                    );
                    status = 1;
                    await db.close();
                    return status;
                } else {
                    console.log("Project could not be found");
                    await db.close();
                    return status;
                }
            });
            
    }
    catch (err) {
        console.log('Project could not be updated');
        await db.close();
    }
}

//add NN to db
async function addProject(user, nnData, status) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    status = 0;

    try {
        await MongoClient.connect(url, async function (err, db) {
            var dbo = db.db("mydb");
            var nn = await dbo.collection("neuralNets");
            await nn.insertOne({ nuser: user, neuralNetData: nnData});
            console.log("Neural net added to database for user: " + user);
            await db.close();
            status = 1;
            return status;
        });
    }
    catch (err) {
        console.log('Neural net was not added to database due to an error');
        await db.close();
        return status;
    }
}

async function findNN(user, nnData) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    try {
        await MongoClient.connect(url, async function (err, db) {
            var dbo = db.db("mydb");
            var nn = await dbo.collection("neuralNets");
            await nn.find({ nuser: user}, async function (err, doc) {
                if (doc) {
                    console.log("Neural Net found for: " + user =", returning...");
                    nnData = doc.neuralNetData;
                } else {
                    console.log("Neural Net not found for user: " + user);
                    nnData = 0;
                }
            });
            await db.close;
        });
    }
    catch (err) {
        console.log('Neural Net not found due to an error');
        await db.close();
        return status;
    }
}

//(async function test () {
    //await checkUser("admin", "adminpass");
//}())

module.exports = {
    checkUser: checkUser
}