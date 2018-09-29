"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var neuralNetControllers = require('./neuralNetController.js');
var packController = require('./packeryController.js');
var $ = require('jquery');
var clickCounter = 0;
//class for the index page
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Hello.prototype.handleClick = function (event) {
        //if element is in grid
        //if it is the reset NN command
    };
    Hello.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "logIn" },
                    React.createElement("a", { href: "login" }, "Log In")),
                React.createElement("h2", { className: "loggedIn", id: "prefs" },
                    React.createElement("a", { href: "preferences" }, "Preferences")),
                React.createElement("h2", { className: "loggedIn", id: "logOut" },
                    React.createElement("a", { href: "login" }, "Log Out"))),
            React.createElement("div", { className: "nNButtons" },
                React.createElement("h2", { className: "buttonsNN", id: "task" },
                    React.createElement("a", { href: "addProject" }, "Add project")),
                React.createElement("h2", { className: "buttonsNN", id: "block" },
                    React.createElement("a", { href: "addBlock" }, "Add block")),
                React.createElement("h2", { className: "buttonsNN", id: "reset" }, "Reset Neural Network")),
            React.createElement("div", { className: 'timeplan' },
                React.createElement("div", { className: "grid", "data-packery": '{"itemSelector":".grid-item"}' },
                    React.createElement("div", { className: "grid-item", id: "1" }, "Monday 9-11"),
                    React.createElement("div", { className: "grid-item", id: "2" }, "Monday 11-13"),
                    React.createElement("div", { className: "grid-item", id: "3" }, "Monday 13-15"),
                    React.createElement("div", { className: "grid-item", id: "4" }, "Monday 15-17"),
                    React.createElement("div", { className: "grid-item", id: "5" }, "Tuesday 9-11"),
                    React.createElement("div", { className: "grid-item", id: "6" }, "Tuesday 11-13"),
                    React.createElement("div", { className: "grid-item", id: "7" }, "Tuesday 13-15"),
                    React.createElement("div", { className: "grid-item", id: "8" }, "Tuesday 15-17"),
                    React.createElement("div", { className: "grid-item", id: "9" }, "Wednesday 9-11"),
                    React.createElement("div", { className: "grid-item", id: "10" }, "Wednesday 11-13"),
                    React.createElement("div", { className: "grid-item", id: "11" }, "Wednesday 13-15"),
                    React.createElement("div", { className: "grid-item", id: "12" }, "Wednesday 15-17"),
                    React.createElement("div", { className: "grid-item", id: "13" }, "Thursday 9-11"),
                    React.createElement("div", { className: "grid-item", id: "14" }, "Thursday 11-13"),
                    React.createElement("div", { className: "grid-item", id: "15" }, "Thursday 13-15"),
                    React.createElement("div", { className: "grid-item", id: "16" }, "Thursday 15-17"),
                    React.createElement("div", { className: "grid-item", id: "17" }, "Friday 9-11"),
                    React.createElement("div", { className: "grid-item", id: "18" }, "Friday 11-13"),
                    React.createElement("div", { className: "grid-item", id: "19" }, "Friday 13-15"),
                    React.createElement("div", { className: "grid-item", id: "20" }, "Friday 15-17")))));
    };
    return Hello;
}(React.Component));
//class for the login page
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    LoginForm.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    LoginForm.prototype.handleSubmit = function (event) {
        console.log('A login was requested');
        event.preventDefault();
        //handle login
        //check with mongo
        //if correct redirect to index
        //if not redirect to login page
    };
    LoginForm.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "loggedIn", id: "back" },
                    React.createElement("a", { href: "/" }, "Back"))),
            React.createElement("div", { className: "inputFields" },
                React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("label", null,
                        "Username/ Email:",
                        React.createElement("input", { type: "text", id: "user", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Password:",
                        React.createElement("input", { type: "password", id: "pass", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("input", { type: "submit", value: "Submit" })))));
    };
    return LoginForm;
}(React.Component));
//class for block page
var AddBlock = /** @class */ (function (_super) {
    __extends(AddBlock, _super);
    function AddBlock(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    AddBlock.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    AddBlock.prototype.handleSubmit = function (event) {
        console.log('A new block was added');
        event.preventDefault();
    };
    AddBlock.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "loggedIn", id: "back" },
                    React.createElement("a", { href: "/" }, "Back"))),
            React.createElement("div", { className: "inputFields" },
                React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("label", null,
                        "Block Name:",
                        React.createElement("input", { type: "text", id: "bName", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Block time:",
                        React.createElement("input", { type: "number", id: "bTime", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Block Amount:",
                        React.createElement("input", { type: "text", id: "number", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("input", { type: "submit", value: "Add Block" })))));
    };
    return AddBlock;
}(React.Component));
//class for projects
var AddProject = /** @class */ (function (_super) {
    __extends(AddProject, _super);
    function AddProject(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    AddProject.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    AddProject.prototype.handleSubmit = function (event) {
        console.log('A new project was added');
        event.preventDefault();
    };
    AddProject.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "loggedIn", id: "back" },
                    React.createElement("a", { href: "/" }, "Back"))),
            React.createElement("div", { className: "inputFields" },
                React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("label", null,
                        "Project Name:",
                        React.createElement("input", { type: "text", id: "pName", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Project Length:",
                        React.createElement("input", { type: "number", id: "pLength", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Project Priority:",
                        React.createElement("input", { type: "number", id: "pPriority", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("label", null,
                        "Project Due Date:",
                        React.createElement("input", { type: "date", id: "pDate", value: this.state.value, onChange: this.handleChange, required: true })),
                    React.createElement("input", { type: "submit", value: "Add Add Project" })))));
    };
    return AddProject;
}(React.Component));
//class for preferences page
var Preferences = /** @class */ (function (_super) {
    __extends(Preferences, _super);
    function Preferences(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    Preferences.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    Preferences.prototype.handleSubmit = function (event) {
        console.log('Preferences were updated');
        event.preventDefault();
    };
    Preferences.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "loggedIn", id: "back" },
                    React.createElement("a", { href: "/" }, "Back"))),
            React.createElement("div", { className: "inputFields" },
                React.createElement("form", { onSubmit: this.handleSubmit },
                    React.createElement("div", null,
                        React.createElement("label", null,
                            "Grouped",
                            React.createElement("input", { type: "radio", id: "grouped", name: "grouping", value: "Grouped", checked: true }))),
                    React.createElement("div", null,
                        React.createElement("label", null,
                            "Un-Grouped",
                            React.createElement("input", { type: "radio", id: "ungrouped", name: "grouping", value: "Un-Grouped" }))),
                    React.createElement("input", { type: "submit", value: "Change Preferences" })))));
    };
    return Preferences;
}(React.Component));
//would initialise the draggable elements
//packController.initDrag();
//creates a neural network
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
//checks which html page the user is on
if (document.getElementById('root')) {
    ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));
}
if (document.getElementById('loginPage')) {
    ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('loginPage'));
}
if (document.getElementById('addProject')) {
    ReactDOM.render(React.createElement(AddProject, null), document.getElementById('addProject'));
}
if (document.getElementById('addBlock')) {
    ReactDOM.render(React.createElement(AddBlock, null), document.getElementById('addBlock'));
}
if (document.getElementById('preferences')) {
    ReactDOM.render(React.createElement(Preferences, null), document.getElementById('preferences'));
}
/*node_modules\.bin\webpack app.tsx --config webpack-config.js*/ 
//# sourceMappingURL=app.js.map