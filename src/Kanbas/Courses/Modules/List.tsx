import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
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
        <li className="list-group-item">
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
            }
          /><br />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </li>
        {modulesList.filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (

                    <li className="list-group-item "  >
                      <FaEllipsisV className="me-2" />
                      {lesson.extlink ?
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