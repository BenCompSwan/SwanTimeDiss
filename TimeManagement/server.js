'use strict';
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

var app = express();

var engines = require('consolidate');

var staticPath = path.join(__dirname);
app.use(express.static(staticPath));

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('viewengine', 'html');

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



//login routing
app.use('/login', function (req, res) {
    console.log('Displaying the login page');
    res.render('login.html')
});

app.post('/login', function(req, res){
    console.log(req.body);
})

/*app.use(function (req, res, next) {
    if (!req.session.accessToken) {
        res.direct('/login');
    } else {
        next;
    }
});*/

//index
app.get('/', function (req, res) {
    res.render('index.html', {});
});

//project routing
app.use('/addProject', function (req, res) {
    console.log('Displaying the add Project page');
    res.render('addProject.html')
});

//block routing
app.use('/addBlock', function (req, res) {
    console.log('Displaying the add Block page');
    res.render('addBlock.html')
});

//preferences routing
app.use('/preferences', function (req, res) {
    console.log('Displaying the preferences page');
    res.render('preferences.html')
});

//allows for flexibility of port configuration in project properties
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening at ' + app.get('port'));
});