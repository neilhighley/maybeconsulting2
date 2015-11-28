var React = require('react');

var Intro = React.createClass({

    render(){
        return (
            <section id="siteintro">
                <header>intro</header>
                <article className="intro-content">
                sOME INTRO COPY
                </article>
            </section>
        );
    }
});

module.exports = Intro;