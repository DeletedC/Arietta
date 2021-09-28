const React = require('react');

class ModalToDelete extends React.Component {
    render() {

        const {student} = this.props;

        return (
            <div className="modal fade" id="modalDelete" tabIndex="-1" aria-labelledby="modalDeleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="modalDeleteLabel">DELETE {student.nameFirst} {student.nameLast}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="font-weight-normal">{student.nameFirst} {student.nameLast} will be deleted. <span className="font-weight-bold">Are you sure?</span></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-lg flex-grow-1" data-dismiss="modal">Cancel</button>
                            <form action={`/students/${student._id}?_method=DELETE`} method="post">
                                <input className="btn btn-outline-danger btn-lg" type="submit" value="Delete"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );           
    }
}

module.exports = ModalToDelete;