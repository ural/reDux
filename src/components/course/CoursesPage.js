import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          course: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }
    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <li key={index} className="list-group-item list-group-item-success list-group-item-action"> {course.title} </li>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <ul className="list-group">
                    {this.props.courses.map(this.courseRow)}
                </ul>
                <h2>Add Courses</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} className="btn-sm" />
            </div>
        );
    }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);
