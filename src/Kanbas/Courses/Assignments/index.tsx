import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AMControlButtons from "./AMControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";

export default function Assignments() {
    return (
      <div>
        <AssignmentControls /><br /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray"></li>
        <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS  40% of Total
          <AMControlButtons />  
        </div></ul>
        <ul className="wd-assignments list-group rounded-0">
          <li className="wd-assignment list-group-item p-3 ps-1">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
                <BsGripVertical className="me-2 fs-3" />
                <FaRegFileAlt className="me-2 fs-3" />
              A1
              <AssignmentControlButtons />
            </a>
            <ul className="wd-assignment-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 6 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 13 at 11:59pm | 100pts</ul>
            </ul>
          </li>
          <li className="wd-assignment list-group-item p-3 ps-1">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegFileAlt className="me-2 fs-3" />
              A2
              <AssignmentControlButtons />
            </a>
            <ul className="wd-assignmen-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 13 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 20 at 11:59pm | 100pts</ul>
            </ul>
          </li>
          <li className="wd-assignment list-group-item p-3 ps-1">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegFileAlt className="me-2 fs-3" />
              A3
              <AssignmentControlButtons />
            </a>
            <ul className="wd-assignment-list">
            <ul className="wd-assignment-list-item">Multiple Modules | Not avaliable until May 20 at 12:00am |</ul>
            <ul className="wd-assignment-list-item">Due May 27 at 11:59pm | 100pts</ul>
            </ul>
          </li>
        </ul>
      </div>
  );}
  
  