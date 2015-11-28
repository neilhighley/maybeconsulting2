var React = require('react');

var MaybeBanner = React.createClass({

    render(){
        return (
            <object id="maybebanner" type="image/svg+xml" data="assets/images/maybeconsulting_logo-02.svg">
                <div></div>
            </object>
        );
    }
});

module.exports = MaybeBanner;