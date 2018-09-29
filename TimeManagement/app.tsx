declare var require: any

import * as React from "react";
import * as ReactDOM from "react-dom";
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Block Name:
                        <input type="text" id="bName" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Block time:
                        <input type="text" id="bTime" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Block Amount:
                        <input type="text" id="bAmount" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <input type="submit" value="Add Block"/>
                </form>
            </div>
        );
    }
}

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
                <form onSubmit={this.handleSubmit}>
                    
                </form>
            </div>
        );
    }
}

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
                <form onSubmit={this.handleSubmit}>
                    
                </form>
            </div>
        );
    }
}


//packController.initDrag();
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
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