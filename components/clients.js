var React = require('react');

var Clients = React.createClass({

    render(){
        return (
            <section id="siteclients">
                <header>clients</header>
                <article className="clients-content">
                    Some clients here
                </article>
            </section>
        );
    }
});

module.exports = Clients;