const React= require('react');
import {isDatabaseConnected} from '../../public/js/check';

class NavBar extends React.Component {
    render() {

        const {students} = this.props;
        let connected = isDatabaseConnected(students);

        return (
            <nav className="nav justify-content-center p-3 sticky-top">
                <a className="nav-item nav-link mx-3" href="/students" role="button"><h2>Home</h2></a>
                {connected
                    ? <a className="nav-item nav-link mx-3" href="/students/new" role="button"><h2>New Student</h2></a>
                    : ''
                }
            </nav>
        );
    };
};

module.exports = NavBar;