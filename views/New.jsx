const React = require('react');
const Layout = require('./components/Layout.jsx');
const Form = require('./components/Form');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>New Student Form</h1>
                    </div>
                    <div className="row justify-content-center">
                        <Form action="/students" method="POST" student={null} deletable={false}/>
                    </div>

                </div>
            </Layout>
        );
    };
};

module.exports = New;