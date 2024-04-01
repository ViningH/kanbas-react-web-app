import axios from "axios";
const COURSES_API = "https://kanbas-node-server-app-hv-05fc8772bf2c.herokuapp.com/api/courses";
const ASSIGNMENTS_API = "https://kanbas-node-server-app-hv-05fc8772bf2c.herokuapp.com/api/assignments";
export const updateAssignment = async (assignment: { _id: any; }) => {
    const response = await axios
      .put(`${ASSIGNMENTS_API }/${assignment._id}`, assignment);
    return response.data;
  };
  
export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (courseId: any, assignment: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };
  
export const findAssignmentsForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
