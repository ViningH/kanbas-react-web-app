import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import Account from "./Account";
function Kanbas() {
   return (
         <div className="d-flex">
            <div className="d-none d-md-block wd-kanbas-navi-height">
               <KanbasNavigation />
            </div>
            <div className="wd-shift-content" style={{ flexGrow: 1 }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account/*" element={<Account />} />
                  <Route path="Dashboard" element={<Dashboard />} />
                  <Route path="Courses/:courseId/*" element={<Courses />} />
               </Routes>

            </div>
         </div>
   );
}
export default Kanbas;