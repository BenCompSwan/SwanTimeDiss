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
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "navArea" },
                React.createElement("h1", { id: "pageTitle" }, "TMS Time Management System"),
                React.createElement("h2", { className: "logIn" }, "Log In"),
                React.createElement("h2", { className: "loggedIn", id: "prefs" }, "Preferences"),
                React.createElement("h2", { className: "loggedIn", id: "logOut" }, "Log Out")),
            React.createElement("div", { className: "nNButtons" },
                React.createElement("h2", { className: "buttonsNN", id: "task" }, "Add new task"),
                React.createElement("h2", { className: "buttonsNN", id: "block" }, "Add new block"),
                React.createElement("h2", { className: "buttonsNN", id: "reset" }, "Reset Sorting Logic")),
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
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("label", null,
                    "Username/ Email:",
                    React.createElement("input", { type: "text", id: "user", value: this.state.value, onChange: this.handleChange, required: true })),
                React.createElement("label", null,
                    "Password:",
                    React.createElement("input", { type: "password", id: "pass", value: this.state.value, onChange: this.handleChange, required: true })),
                React.createElement("input", { type: "submit", value: "Submit" }))));
    };
    return LoginForm;
}(React.Component));
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
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("label", null,
                    "Block Name:",
                    React.createElement("input", { type: "text", id: "bName", value: this.state.value, onChange: this.handleChange, required: true })),
                React.createElement("label", null,
                    "Block time:",
                    React.createElement("input", { type: "text", id: "bTime", value: this.state.value, onChange: this.handleChange, required: true })),
                React.createElement("label", null,
                    "Block Amount:",
                    React.createElement("input", { type: "text", id: "bAmount", value: this.state.value, onChange: this.handleChange, required: true })),
                React.createElement("input", { type: "submit", value: "Add Block" }))));
    };
    return AddBlock;
}(React.Component));
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
            React.createElement("form", { onSubmit: this.handleSubmit })));
    };
    return AddProject;
}(React.Component));
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
            React.createElement("form", { onSubmit: this.handleSubmit })));
    };
    return Preferences;
}(React.Component));
//packController.initDrag();
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
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