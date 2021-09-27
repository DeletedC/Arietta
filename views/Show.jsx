const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const {student} = this.props;
        return (
            <Layout>
                <div className="d-flex flex-column align-items-center">
                    <h1>{student.nameFirst} {student.nameLast}</h1>
                    <img className="img" src={student.img}/>
                    <div>
                        <h3>Book: {student.book}</h3>
                        <h3>Level: {student.level}</h3>
                        <h3>Notes: {student.notes}</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <form action={`/students/edit/${student._id}`} method="get">
                            <input className="btn btn-outline-secondary btn-lg" type="submit" value="Edit"/>
                        </form>
                        <form action={`/students/${student._id}?_method=DELETE`} method="post">
                            <input className="btn btn-outline-danger btn-lg" type="submit" value="Delete"/>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;