var React = require('react');
var Parallax = require('react-parallax')
var LogoHeader = require('./logoheader');

var Intro = require('./intro');
var ContactUs = require('./contactus');
var Clients = require('./clients');


var App = React.createClass({
    render(){
            return (
            <section id="app-content"><LogoHeader></LogoHeader>
                <section id="sitecontent">
                      <Intro></Intro>
                      <Clients></Clients>
                      <ContactUs></ContactUs>
                   
                </section>
            </section>
            );
        }
    
});

$(".site-footer .copyrighttext").html("&copy; Maybe Consulting 2016");
module.exports = App;
