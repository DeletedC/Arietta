const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="container d-flex flex-column align-items-center">
                    <h1>{student.nameFirst} {student.nameLast}</h1>
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" src={student.img}/> 
                        </div>
                        <div className="col-6 pl-5">
                            <p>Book: {student.book}</p>
                            <p>Level: {student.level}</p>
                            <p>Notes: {student.notes}</p>

                            <form action={`/students/edit/${student._id}`} method="get">
                                <input className="btn btn-outline-secondary btn-lg" type="submit" value="Edit"/>
                            </form>
                            <form action={`/students/${student._id}?_method=DELETE`} method="post">
                                <input className="btn btn-outline-danger btn-lg" type="submit" value="Delete"/>
                            </form>
                        </div>
                    </div>
                    
                    
                </div>
            </Layout>
        );
    };
};

module.exports = Show;