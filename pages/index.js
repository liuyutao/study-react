/**
 * Created by user on 16/2/8.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('../components/Menu.jsx');
var AppBarExampleIcon = require('../components/AppBarExampleIcon.jsx');
ReactDOM.render(
    <div>
        <Menu/>
        {AppBarExampleIcon}
    </div>,
    document.getElementById("main")
);