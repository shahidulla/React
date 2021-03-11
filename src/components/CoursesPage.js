import React, {useState, useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList'
import {Link} from 'react-router-dom';

// class CoursePage extends React.Component {
//   state = {
//     courses: [],
//   };

function CoursePage(){

const [courses, setCourse] = useState([]);

useEffect(()=>{
  getCourses().then((_courses) => setCourse(_courses));
},[])

    return (
      <>
        <h2>Courses</h2>
        <Link className='btn btn-primary' to='/course'>
          Add Course
          </Link>
      <CourseList courses = {courses} />
      </>
    );
  }

export default CoursePage;
