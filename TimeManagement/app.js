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
var React = require('react');
var ReactDOM = require('react-dom');
var neuralNetControllers = require('./neuralNetController.js');
var packController = require('./packeryController.js');
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
                    React.createElement("div", { className: "grid-item", id: "1" }),
                    React.createElement("div", { className: "grid-item", id: "2" }),
                    React.createElement("div", { className: "grid-item", id: "3" }),
                    React.createElement("div", { className: "grid-item", id: "4" }),
                    React.createElement("div", { className: "grid-item", id: "5" }),
                    React.createElement("div", { className: "grid-item", id: "6" }),
                    React.createElement("div", { className: "grid-item", id: "7" }),
                    React.createElement("div", { className: "grid-item", id: "8" }),
                    React.createElement("div", { className: "grid-item", id: "9" }),
                    React.createElement("div", { className: "grid-item", id: "10" }),
                    React.createElement("div", { className: "grid-item", id: "11" }),
                    React.createElement("div", { className: "grid-item", id: "12" }),
                    React.createElement("div", { className: "grid-item", id: "13" }),
                    React.createElement("div", { className: "grid-item", id: "14" }),
                    React.createElement("div", { className: "grid-item", id: "15" }),
                    React.createElement("div", { className: "grid-item", id: "16" }),
                    React.createElement("div", { className: "grid-item", id: "17" }),
                    React.createElement("div", { className: "grid-item", id: "18" }),
                    React.createElement("div", { className: "grid-item", id: "19" }),
                    React.createElement("div", { className: "grid-item", id: "20" })))));
    };
    return Hello;
}(React.Component));
//packController.initDrag();
var testNet = neuralNetControllers.createNet();
neuralNetControllers.viewNetLayers(testNet);
ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));
/*node_moddules\.bin\webpack app.tsx --config webpack-config.js*/ 
//# sourceMappingURL=app.js.map