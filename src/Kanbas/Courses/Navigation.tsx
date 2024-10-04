import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home"
      className="list-group-item active border border-0">Home</Link>
      <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
      className="list-group-item text-danger border border-0">Modules</Link>
      <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/5610/Piazza"
      className="list-group-item text-danger border border-0">Piazza</Link>
      <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/5610/Zoom"
      className="list-group-item text-danger border border-0">Zoom</Link>
      <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/5610/Assignments"
      className="list-group-item text-danger border border-0">Assignments</Link>
      <Link id="wd-course-assignments-link" to="/Kanbas/Courses/5610/Quizzes"
      className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link id="wd-course-grades-link"  to="/Kanbas/Courses/5610/Grades"
      className="list-group-item text-danger border border-0">Grades</Link>
      <Link id="wd-course-people-link"  to="/Kanbas/Courses/1234/People"
      className="list-group-item text-danger border border-0">People</Link>
    </div>
);}

