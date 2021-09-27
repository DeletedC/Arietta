const React= require('react');

class Card extends React.Component {
    render() {

        const {student} = this.props;

        return (
            <div className="col-md-3 col-sm-6 text-center mb-3 mt-3">
                    <a href={`/students/${student._id}`}>
                        <h3 className="text-truncate">{student.nameLast},</h3>
                        <h3 className="text-truncate">{student.nameFirst}</h3>
                    <img className="card-img-top img-thumbnail" src={student.img}></img>
                    </a>
         
                <div className="row justify-content-center">
                    <form action={`/students/edit/${student._id}`} method="get">
                        <input className="btn btn-outline-secondary" type="submit" value="Edit"/>
                    </form>
                    <form action={`/students/${student._id}?_method=DELETE`} method="post">
                        <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                    </form>
                </div>
            </div>
        );
    };
};

module.exports = Card;