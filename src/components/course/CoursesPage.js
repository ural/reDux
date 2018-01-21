import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
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
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
