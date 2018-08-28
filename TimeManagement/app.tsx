declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
var neuralNetControllers = require('./neuralNetController.js');

class Hello extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="topOfPage">
                    <h1 className="pageTitle">TMS Time Management System</h1>
                    <h2 className="logIn">Log In</h2>
                    <h2 className="loggedIn" id="prefs">Preferences</h2>
                    <h2 className="loggedIn" id="logOut">Log Out</h2>
                </div>
                <div className="nNButtons">
                    <h2 className="buttonsNN" id="task">Add new task</h2>
                    <h2 className="buttonsNN" id="block">Add new block</h2>
                    <h2 className="buttonsNN" id="reset">Reset Sorting Logic</h2>
                </div>
                <div className="">
                    {/*Packery controlled NN to go here*/}
                </div>
            </div>

        );
    }
}

var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
ReactDOM.render(<Hello />, document.getElementById('root'));