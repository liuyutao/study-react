var React = require('react');
var ReactDOM = require('react-dom');


import RaisedButton from 'material-ui/lib/raised-button';

const MyAwesomeReactComponent = () => (
    <RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;

var Menu = React.createClass({
    render:function(){
        return <div>MENU
            <MyAwesomeReactComponent/>
        </div>;
    }
})


module.exports = Menu;