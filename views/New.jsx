const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>New Student Form</h1>
                    </div>
                    <div className="row justify-content-center">
                        <form action="/students" method="POST">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" name="nameFirst" placeholder="First Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="nameLast" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" name="img" placeholder="Picture URL"/>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" name="book" placeholder="Book"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="level" placeholder="Level"/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" name="notes" placeholder="Notes"/>
                                </div>
                            </div>
                            <input className="btn btn-outline-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                </div>
            </Layout>
        );
    };
};

module.exports = New;