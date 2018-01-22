import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
        <table className="table table-dark table-responsive">
            <thead className="thead-dark">
            <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Length</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course => <CourseListRow key={course.id} course={course} /> )}
            </tbody>
        </table>
    );
};
CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
