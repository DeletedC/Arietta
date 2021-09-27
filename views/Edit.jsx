const React = require('react');
const Layout = require('./components/Layout.jsx');
const Form = require('./components/Form');

class Edit extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="pb-2">Edit</h1>
                    <h2 className="pb-4 font-weight-bold">{student.nameFirst} {student.nameLast}</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={student.img}/>
                        </div>
                        <div className="col-md-6">
                            <Form action={`/students/edit/${student._id}?_method=PUT`} method="POST" student={student} deletable={true}/>
                        </div>
                    </div>
                    
                    
                </div>
            </Layout>
        );
    };
};

module.exports = Edit;