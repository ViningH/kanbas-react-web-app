import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <p className="wd-inline-align">
        <input placeholder="Search for Assignments" />
        <span>
          <button className="wd-standard-button">+ Group</button>
          <button className="wd-red-button">+ Assignment</button>
          <button className="wd-standard-button">⋮</button></span>
      </p>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /><strong>🞃 Assignments</strong> 
            <span className="float-end">
            <button className="wd-assignment-button">40% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <TbFilePencil className="text-success" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-assignment-title-link">{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;