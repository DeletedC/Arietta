const React= require('react');

class Banner extends React.Component {
    render() {
        return (
            <div className="jumbotron mb-0 text-center">
                <h1 className="display-4">Piano Studio</h1>
                <h1 className="display-4">Student Tracker</h1>
            </div>
        );
    };
};

module.exports = Banner;