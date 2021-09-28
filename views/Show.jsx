const React = require('react');
const Layout = require('./components/Layout.jsx');
const ModalToDelete = require('./components/ModalToDelete');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="pb-4 font-weight-bold">{student.nameFirst} {student.nameLast}</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid pb-3" src={student.img} alt={`Picture of ${student.nameFirst} ${student.nameLast}`}/> 
                        </div>
                        <div className="col-md-6 pl-md-5">
                            <p className="h2 font-weight-bold">Book: <span className="font-weight-normal">{student.book}</span></p>
                            <p className="h2 font-weight-bold">Level: <span className="font-weight-normal">{student.level}</span></p>
                            <p className="h2 font-weight-bold">Notes: <span className="font-weight-normal">{student.notes}</span></p>

                            <form action={`/students/edit/${student._id}`} method="get">
                                <input className="btn btn-outline-secondary btn-lg" type="submit" value="Edit"/>
                            </form>
                            <form >
                                <input className="btn btn-outline-danger btn-lg" type="button" value="Delete" data-toggle="modal" data-target="#modalDelete"/>
                            </form>
                        </div>
                    </div>
                    
                    {/* Modal with warning */}
                    <ModalToDelete student={student} />
                    
                </div>
            </Layout>
        );
    };
};

module.exports = Show;