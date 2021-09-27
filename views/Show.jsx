const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="pb-4 font-weight-bold">{student.nameFirst} {student.nameLast}</h1>
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" src={student.img}/> 
                        </div>
                        <div className="col-6 pl-5">
                            <p className="h2 font-weight-bold">Book: <span className="font-weight-normal">{student.book}</span></p>
                            <p className="h2 font-weight-bold">Level: <span className="font-weight-normal">{student.level}</span></p>
                            <p className="h2 font-weight-bold">Notes: <span className="font-weight-normal">{student.notes}</span></p>

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