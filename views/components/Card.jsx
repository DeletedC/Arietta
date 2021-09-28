const React= require('react');
const ModalToDelete = require('./ModalToDelete');

class Card extends React.Component {
    render() {

        const {student} = this.props;

        return (
            <div className="col-lg-3 col-sm-6 text-center mb-3 mt-3">
                    <a href={`/students/${student._id}`} className="text-dark">
                        <p className="h3 text-truncate">{student.nameLast},</p>
                        <p className="h3 text-truncate">{student.nameFirst}</p>
                    <img className="card-img-top img-thumbnail" src={student.img}></img>
                    </a>
         
                <div className="row justify-content-center">
                    <form action={`/students/edit/${student._id}`} method="get">
                        <input className="btn btn-outline-secondary btn-lg px-5" type="submit" value="Edit"/>
                    </form>
                    <form >
                        <input className="btn btn-outline-danger btn-lg" type="button" value="Delete" data-toggle="modal" data-target="#modalDelete"/>
                    </form>
                </div>

                {/* Modal with warning */}
                <ModalToDelete student={student} />
            </div>
        );
    };
};

module.exports = Card;