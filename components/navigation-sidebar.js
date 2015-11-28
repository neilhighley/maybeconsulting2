var React = require('react');

var NavigationSidebar = React.createClass({

    render(){
        return (
           <nav>
           <ul>
           <li>Intro</li>
           <li>Clients</li>
           <li>Contact Us</li>
           </ul>
           </nav>
        );
    }
});

module.exports = NavigationSidebar;