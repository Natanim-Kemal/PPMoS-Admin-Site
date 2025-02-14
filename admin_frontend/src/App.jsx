import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/SideBar"
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import AddChair from "./pages/AddChair";
import AddAdvisor from "./pages/AddAdvisor";
import AddDean from "./pages/AddDean";
import ShowDeans from "./pages/ShowDeans";
import ShowPgCoordinator from "./pages/ShowPgCoordinator";
import ShowAdvisors from "./pages/ShowAdvisors";
import ShowChairs from "./pages/ShowChairs";
import ShowStudents from "./pages/ShowStudents";
import AddPgCoordinator from "./pages/AddPgCoordinator";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/add-chair" element={<AddChair />} />
            <Route path="/add-advisor" element={<AddAdvisor />} />
            <Route path="/add-pg-coordinator" element={<AddPgCoordinator />} />
            <Route path="/add-dean" element={<AddDean />} />
            <Route path="/students" element={<ShowStudents />} />
            <Route path="/chairs" element={<ShowChairs />} />
            <Route path="/advisors" element={<ShowAdvisors />} />
            <Route path="/pg-coordinators" element={<ShowPgCoordinator />} />
            <Route path="/deans" element={<ShowDeans />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
