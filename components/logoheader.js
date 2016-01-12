var React = require('react');
var MaybeBanner = require('./maybebanner');
var NavigationSidebar = require('./navigation-sidebar');

var Header = React.createClass({

    render(){
        return (
            <header className="site-header">
                <MaybeBanner></MaybeBanner>
                <NavigationSidebar></NavigationSidebar>
            </header>
        );
    }
});

module.exports = Header;