var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true,
}));
var dbController = require('./mongoController');

//routing for index
router.use('/', function (req, res) {
    console.log('Displaying the index page');
    res.render('index.html')
});

//routing for add project
router.use('/addProject', function (req, res) {
    console.log('Displaying the add Project page');
    res.render('addProject.html')
});

//routing for block page
router.use('/addBlock', function (req, res) {
    console.log('Displaying the add Block page');
    res.render('addBlock.html')
});

// routing for preferences page
router.use('/preferences', function (req, res) {
    console.log('Displaying the preferences page');
    res.render('preferences.html')
});

//routing for login
router.use('/login', function (req, res) {
    console.log('Rendering login');
    res.render('login.html', {});
});

router.post('/login', (req, res) => {
    var data = req.body;
    console.log(data);
    //dbController.checkUser(req.body.message)
});