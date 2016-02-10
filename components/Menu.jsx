var React = require('react');
var ReactDOM = require('react-dom');


import RaisedButton from 'material-ui/lib/raised-button';


//export default MyAwesomeReactComponent;

var Menu = React.createClass({
    render:function(){
        return <div>
            MENU
            <RaisedButton label="Default" />
        </div>;
    }
})


module.exports = Menu;