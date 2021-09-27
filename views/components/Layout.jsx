const React= require('react');
const Banner = require('./Banner');
const NavBar = require('./NavBar');
const Footer = require('./Footer');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    {/* meta tags for LinkedIn */}
                    <meta property="og:title" content="Arietta"/>
                    <meta property="og:image" content="https://curtiswoods.herokuapp.com/img/screenshot.png"/>
                    <meta property="og:description" content="Arietta, Studio Roster App"/>
                    <meta property="og:url" content="//curtiswoods.herokuapp.com/students"/>

                    {/* Bootstrap */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
                    
                    {/* Personal CSS */}
                    <link href="/css/style.css" rel="stylesheet"/>

                    {/* Google Font, Merienda */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap" rel="stylesheet" />

                    {/* Google Font, Montserrat */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
                    
                    <title>Student Tracker</title>

                    <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,700;0,900;1,400&display=swap" rel="stylesheet"/> 
                </head>
                <body>
                    <div className="d-flex flex-column min-vh-100">
                        <Banner/>
                        <NavBar />
                        <div className="main py-5 flex-fill">
                            {this.props.children}
                        </div>
                        <Footer/>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Layout;