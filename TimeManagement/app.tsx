declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
var neuralNetControllers = require('./neuralNetController.js');
var packController = require('./packeryController.js');
var $ = require('jquery');

class Hello extends React.Component {
    
    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="logIn">Log In</h2>
                    <h2 className="loggedIn" id="prefs">Preferences</h2>
                    <h2 className="loggedIn" id="logOut">Log Out</h2>
                </div>
                <div className="nNButtons">
                    <h2 className="buttonsNN" id="task">Add new task</h2>
                    <h2 className="buttonsNN" id="block">Add new block</h2>
                    <h2 className="buttonsNN" id="reset">Reset Sorting Logic</h2>
                </div>
                <div className='timeplan'>
                    {/*Packery controlled NN to go here*/}
                    <div className="grid" data-packery='{"itemSelector":".grid-item"}'>
                        <div className="grid-item" id="1"></div>
                        <div className="grid-item" id="2"></div>
                        <div className="grid-item" id="3"></div>
                        <div className="grid-item" id="4"></div>
                        <div className="grid-item" id="5"></div>
                        <div className="grid-item" id="6"></div>
                        <div className="grid-item" id="7"></div>
                        <div className="grid-item" id="8"></div>
                        <div className="grid-item" id="9"></div>
                        <div className="grid-item" id="10"></div>
                        <div className="grid-item" id="11"></div>
                        <div className="grid-item" id="12"></div>
                        <div className="grid-item" id="13"></div>
                        <div className="grid-item" id="14"></div>
                        <div className="grid-item" id="15"></div>
                        <div className="grid-item" id="16"></div>
                        <div className="grid-item" id="17"></div>
                        <div className="grid-item" id="18"></div>
                        <div className="grid-item" id="19"></div>
                        <div className="grid-item" id="20"></div>
                    </div>
                </div>
            </div>

        );
    }
}

//packController.initDrag();
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
ReactDOM.render(<Hello />, document.getElementById('root'));
/*node_moddules\.bin\webpack app.tsx --config webpack-config.js*/