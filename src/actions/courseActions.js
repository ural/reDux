import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
/*
import {beginAjaxCall} from './ajaxStatusActions';
import {ajaxCallError} from './ajaxStatusActions';
*/

import * as ajaxStatusActions from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(ajaxStatusActions.beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
           dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(ajaxStatusActions.beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxStatusActions.ajaxCallError(error));
            throw(error);
        });
    };
}

