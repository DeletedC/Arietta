const React = require('react');
const Layout = require('./components/Layout.jsx');
const Form = require('./components/Form');

class Edit extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="d-flex flex-column align-items-center">
                    <h1>Edit</h1>
                    <h2>{student.nameFirst} {student.nameLast}</h2>
                    <img className="img" src={student.img}/>
                    <Form action={`/students/edit/${student._id}?_method=PUT`} method="POST" student={student} deletable={true}/>
                </div>
            </Layout>
        );
    };
};

module.exports = Edit;