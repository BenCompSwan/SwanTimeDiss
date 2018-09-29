declare var require: any

import * as React from "react";
import * as ReactDOM from "react-dom";
var neuralNetControllers = require('./neuralNetController.js');
var packController = require('./packeryController.js');
var $ = require('jquery');
var clickCounter = 0;

//class for the index page
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(event) {
        //if element is in grid
        //if it is the reset NN command
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="logIn"><a href="login">Log In</a></h2>
                    <h2 className="loggedIn" id="prefs"><a href="preferences">Preferences</a></h2>
                    <h2 className="loggedIn" id="logOut"><a href="login">Log Out</a></h2>
                </div>
                <div className="nNButtons">
                    <h2 className="buttonsNN" id="task"><a href="addProject">Add project</a></h2>
                    <h2 className="buttonsNN" id="block"><a href="addBlock">Add block</a></h2>
                    <h2 className="buttonsNN" id="reset">Reset Neural Network</h2>
                </div>
                <div className='timeplan'>
                    {/*Packery controlled NN display*/}
                    <div className="grid" data-packery='{"itemSelector":".grid-item"}'>
                        <div className="grid-item" id="1">Monday 9-11</div>
                        <div className="grid-item" id="2">Monday 11-13</div>
                        <div className="grid-item" id="3">Monday 13-15</div>
                        <div className="grid-item" id="4">Monday 15-17</div>
                        <div className="grid-item" id="5">Tuesday 9-11</div>
                        <div className="grid-item" id="6">Tuesday 11-13</div>
                        <div className="grid-item" id="7">Tuesday 13-15</div>
                        <div className="grid-item" id="8">Tuesday 15-17</div>
                        <div className="grid-item" id="9">Wednesday 9-11</div>
                        <div className="grid-item" id="10">Wednesday 11-13</div>
                        <div className="grid-item" id="11">Wednesday 13-15</div>
                        <div className="grid-item" id="12">Wednesday 15-17</div>
                        <div className="grid-item" id="13">Thursday 9-11</div>
                        <div className="grid-item" id="14">Thursday 11-13</div>
                        <div className="grid-item" id="15">Thursday 13-15</div>
                        <div className="grid-item" id="16">Thursday 15-17</div>
                        <div className="grid-item" id="17">Friday 9-11</div>
                        <div className="grid-item" id="18">Friday 11-13</div>
                        <div className="grid-item" id="19">Friday 13-15</div>
                        <div className="grid-item" id="20">Friday 15-17</div>
                    </div>
                </div>
            </div>

        );
    }
}

//class for the login page
class LoginForm extends React.Component<{}, {value: string}> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A login was requested');
        event.preventDefault();
        //handle login
        //check with mongo
        //if correct redirect to index
        //if not redirect to login page
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="loggedIn" id="back"><a href="/">Back</a></h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username/ Email:
                        <input type="text" id="user" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" id="pass" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

//class for block page
class AddBlock extends React.Component<{}, { value: string }> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A new block was added');
        event.preventDefault();
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="loggedIn" id="back"><a href="/">Back</a></h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Block Name:
                        <input type="text" id="bName" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Block time:
                        <input type="number" id="bTime" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Block Amount:
                        <input type="text" id="number" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <input type="submit" value="Add Block"/>
                </form>
            </div>
        );
    }
}

//class for projects
class AddProject extends React.Component<{}, { value: string }> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A new project was added');
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="loggedIn" id="back"><a href="/">Back</a></h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                        <input type="text" id="pName" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Project Length:
                        <input type="number" id="pLength" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Project Priority:
                        <input type="number" id="pPriority" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Project Due Date:
                        <input type="date" id="pDate" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <input type="submit" value="Add Add Project" />
                </form>
            </div>
        );
    }
}

//class for preferences page
class Preferences extends React.Component<{}, { value: string }> {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('Preferences were updated');
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="navArea">
                    <h1 id="pageTitle">TMS Time Management System</h1>
                    <h2 className="loggedIn" id="back"><a href="/">Back</a></h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Grouped
                            <input type="radio" id="grouped" name="grouping" value="Grouped" checked />
                        </label>
                    </div>

                    <div>
                        <label>Un-Grouped
                            <input type="radio" id="ungrouped" name="grouping" value="Un-Grouped" />
                        </label>
                    </div>
                    <input type="submit" value="Change Preferences" />
                </form>
            </div>
        );
    }
}

//would initialise the draggable elements
//packController.initDrag();
//creates a neural network
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
//checks which html page the user is on
if (document.getElementById('root')) {
ReactDOM.render(<Hello />, document.getElementById('root'));
}
if (document.getElementById('loginPage')) {
    ReactDOM.render(<LoginForm />, document.getElementById('loginPage'));
}
if (document.getElementById('addProject')) {
    ReactDOM.render(<AddProject />, document.getElementById('addProject'));
}
if (document.getElementById('addBlock')) {
    ReactDOM.render(<AddBlock />, document.getElementById('addBlock'));
}
if (document.getElementById('preferences')) {
    ReactDOM.render(<Preferences />, document.getElementById('preferences'));
}
/*node_modules\.bin\webpack app.tsx --config webpack-config.js*/