var React = require('react');
var MaybeBanner = require('./maybebanner');

var App = React.createClass({

    render(){
            return (
            <MaybeBanner></MaybeBanner>
            );
        }
});

module.exports = App;
