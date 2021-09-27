const React= require('react');

class Card extends React.Component {
    render() {

        const {student} = this.props;

        return (
            <div className="col-lg-3 col-md-6 text-center mb-3 mt-3">
                    <a href={`/students/${student._id}`} className="text-dark">
                        <p className="h2 text-truncate">{student.nameLast},</p>
                        <p className="h2 text-truncate">{student.nameFirst}</p>
                    <img className="card-img-top img-thumbnail" src={student.img}></img>
                    </a>
         
                <div className="row justify-content-center">
                    <form action={`/students/edit/${student._id}`} method="get">
                        <input className="btn btn-outline-secondary btn-lg" type="submit" value="Edit"/>
                    </form>
                    <form action={`/students/${student._id}?_method=DELETE`} method="post">
                        <input className="btn btn-outline-danger btn-lg" type="submit" value="Delete"/>
                    </form>
                </div>
            </div>
        );
    };
};

module.exports = Card;