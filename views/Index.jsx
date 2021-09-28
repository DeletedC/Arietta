const React = require('react');
const Layout = require('./components/Layout.jsx');
const Card = require('./components/Card');
import {isDatabaseConnected} from '../public/js/check';

class Index extends React.Component {
    render() {
        const {students} = this.props;
        let connected = isDatabaseConnected(students);

        // Alphabetizing the array
        if (connected) {
            students.sort((a, b) => {
                if (a.nameLast.toUpperCase() > b.nameLast.toUpperCase()) {
                    return 1;
                } else if (a.nameLast.toUpperCase() < b.nameLast.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        

        return (
            <Layout>
                

                <div className="container">
                    <div className="row d-flex flex-column align-items-center">
                        <div className="col d-flex align-items-center">
                           <h2 className="h1 mx-auto">All Students</h2> 
                        </div>
                        <div className="row justify-content-center">
                            {connected
                            ? students.map((student, index) => {
                                return (
                                    <Card key={index} student={student}/>
                                );
                            })

                            : 
                            <div className="col mt-5 text-center">
                                <h3>The database is not connected. Please try again later.</h3>
                            </div>  
                        }
                        </div>
                        
                    </div>
                </div>   
            </Layout>
        );
    };
};

module.exports = Index;