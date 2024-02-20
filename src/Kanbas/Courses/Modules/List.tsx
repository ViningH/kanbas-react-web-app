import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="wd-align-right">
        <button className="wd-standard-button">Collapse All</button>
        <button className="wd-standard-button">View Progress</button>
        <select className="wd-standard-button">
          <option>✔ Publish All</option>
          <option>Unpublish All</option>
        </select>
        <button className="wd-red-button">+ Module</button>
        <button className="wd-standard-button">⋮</button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  
                  <li className="list-group-item "  >
                    <FaEllipsisV className="me-2" />
                    {lesson.extlink? 
                    <>
                    <FaLink className="me-2 text-success" />
                    <a href={lesson.extlink} className="wd-red-link">
                      {lesson.name} <FaExternalLinkAlt className="me-2" />
                      </a></> : lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>

                  </li>
                  
                )
                
                )
                }
                
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;