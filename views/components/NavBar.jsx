const React= require('react');
import {isDatabaseConnected} from '../../public/js/check';

class NavBar extends React.Component {
    render() {

        const {students} = this.props;
        let connected = isDatabaseConnected(students);

        return (
            <nav className="nav d-flex justify-content-center p-3 sticky-top">
                <a className="nav-item nav-link mx-2 text-white h5" href="/students" role="button">Home</a>
                {connected
                    ? <a className="nav-item nav-link mx-2 text-white h5" href="/students/new" role="button">New Student</a>
                    : ''
                }
            </nav>
        );
    };
};

module.exports = NavBar;