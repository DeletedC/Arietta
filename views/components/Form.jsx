const React = require('react');

class Form extends React.Component {
    render() {

        const nullStudent = {
            nameFirst: "",
            nameLast: "",
            img: "",
            book: "",
            level: "",
            notes: ""
        }

        const student = this.props.student !== null? this.props.student : nullStudent;
        const deletable = this.props.deletable? true : false;

        return (
            <div>
                <form action={this.props.action} method={this.props.method}>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="nameFirst" value={student.nameFirst} placeholder="First Name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="nameLast" value={student.nameLast} placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="img" value={student.img} placeholder="Picture URL"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="book" value={student.book} placeholder="Book"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="level" value={student.level} placeholder="Level"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="notes" value={student.notes} placeholder="Notes"/>
                        </div>
                    </div>
                    <input className="btn btn-outline-success" type="submit" value="Submit"/>
                </form>

                {deletable?
                    <form action={`/students/${student._id}?_method=DELETE`} method="post">
                        <input className="btn btn-outline-danger" type="submit" value="Delete"/>
                    </form>
                : ""}
            </div>
            
        );
    }
}

module.exports = Form;