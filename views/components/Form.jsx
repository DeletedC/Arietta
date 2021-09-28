const React = require('react');
const ModalToDelete = require('./ModalToDelete');

class Form extends React.Component {
    render() {
        // If there isn't a student (like for new page), use this
        const nullStudent = {
            nameFirst: "",
            nameLast: "",
            img: "",
            book: "",
            level: "",
            notes: ""
        }

        // If the student exists in props, set it to the student
        // Else, use nullStudent above
        const student = this.props.student !== null? this.props.student : nullStudent;

        // This is for the delete button on the Edit page
        const deletable = this.props.deletable? true : false;

        return (
            // Labels will show up for each section if deletable is true
            //   Like on the Edit page
            // Placeholder text will be used on the New page
            // Looks better and more descriptive this way
            <div>
                <form action={this.props.action} method={this.props.method} className="h5">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            {deletable? <label htmlFor="nameFirst">First Name</label> : ""}
                            <input type="text" className="form-control-lg w-100" name="nameFirst" defaultValue={student.nameFirst} placeholder="First Name" required={true} />
                        </div>
                        <div className="form-group col-sm-6">
                            {deletable? <label htmlFor="nameLast">Last Name</label> : ""}
                            <input type="text" className="form-control-lg w-100" name="nameLast" defaultValue={student.nameLast} placeholder="Last Name" required={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            {deletable? <label htmlFor="img">Picture URL</label> : ""}
                            <input type="text" className="form-control-lg w-100" name="img" defaultValue={student.img} placeholder="Picture URL"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-8">
                            {deletable? <label htmlFor="book">Book</label> : ""}
                            <input type="text" className="form-control-lg w-100" name="book" defaultValue={student.book} placeholder="Book"/>
                        </div>
                        <div className="form-group col-4">
                            {deletable? <label htmlFor="level">Level</label> : ""}
                            <input type="text" className="form-control-lg w-100" name="level" defaultValue={student.level} placeholder="Level"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            {deletable? <label htmlFor="notes">Notes</label> : ""}
                            <textarea className="form-control-lg w-100" name="notes" defaultValue={student.notes} placeholder="Notes"/>
                        </div>
                    </div>
                    <input className="btn btn-success btn-lg" type="submit" value="Submit"/>
                </form>

            
                <form action={`/students`} method="get">
                    <input className="btn btn-outline-secondary btn-lg" type="submit" value="Cancel"/>
                </form>

                {/* Shows the Delete button on the Edit page only */}
                {deletable?
                    <button type="button" className="btn btn-outline-danger btn-lg" data-toggle="modal" data-target="#modalDelete">
                    Delete
                    </button>
                : ""}

                {/* Modal with warning */}
                <ModalToDelete student={student} />
            </div>
            
        );
    }
}

module.exports = Form;