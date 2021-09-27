const React= require('react');

class Banner extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mb-0 text-center">
                <div className="container">
                    <h1 className="display-1">Arietta</h1>
                    <h2>Studio Roster App</h2>
                    <p className="h5 font-weight-bold">by <a href="https://www.CurtisJWoods.com" target="_blank" rel="noopener noreferrer">Curtis Woods</a></p>
                </div>
                
            </div>
        );
    };
};

module.exports = Banner;