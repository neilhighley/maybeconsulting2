var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Intro = require('./intro');
var ContactUs = require('./contactus');
var Clients = require('./clients');


var App = React.createClass({

    render(){
            return (
            <section id="app-content">
                <Header></Header>
                <section id="sitecontent">
                    <Intro></Intro>
                    <Clients></Clients>
                    <ContactUs></ContactUs>
                </section>
                <Footer></Footer>
            </section>
            );
        }
});

module.exports = App;
