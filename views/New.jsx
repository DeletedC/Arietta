const React = require('react');
const Layout = require('./components/Layout.jsx');
const Form = require('./components/Form');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center px-2 pb-3">
                        <h1 className="text-center">New Student Form</h1>
                    </div>
                    <div className="row">
                        <div className="col text-center font-weight-normal">
                            <p>At least a first and last name are required.</p>
                            <p>Some sites may not allow hotlinking images.</p>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center px-3">
                        <Form action="/students" method="POST" student={null} deletable={false}/>
                    </div>

                </div>
            </Layout>
        );
    };
};

module.exports = New;