import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StaffList from "./pages/StaffList";
import AdminUsers from "./pages/AdminUsers";
import Tasks from "./pages/Tasks";
import PerformanceCycle from "./pages/PerformanceCycle";
import StaffDetail from "./pages/StaffDetail";
import StaffTask from "./pages/StaffTask";
import StaffCompetency from "./pages/StaffCompetency";
import AppraisalForms from "./pages/AppraisalForms";
import ProfessionalForm from "./pages/ProfessionalForm";
import OperationalForm from "./pages/OperationalForm";
import BlankForm from "./pages/BlankForm";
import AppraisalActivities from "./pages/AppraisalActivities";
import AppraisalActivityDetail from "./pages/AppraisalActivityDetail";
import Competency from "./pages/Competency";
import CompetencyRating from "./pages/CompetencyRating";
import Feedback from "./pages/Feedback";
import Complaint from "./pages/Complaint";
import ComplaintDetail from "./pages/ComplaintDetail";
import Perspectives from "./pages/Perspectives";
import Company from "./pages/Company";
import Departments from "./pages/Departments";
import Grades from "./pages/Grades";
import Designation from "./pages/Designation";
import AppraisalRating from "./pages/AppraisalRating";
import DepartmentDetail from "./pages/DepartmentDetail";
import DepartmentTask from "./pages/DepartmentTask";
import DepartmentMembers from "./pages/DepartmentMembers";
import CompanyDetail from "./pages/CompanyDetail";
import CompanyDepartments from "./pages/CompanyDepartments";
import CompanyStaff from "./pages/CompanyStaff";
// import Profile from "./pages/Profile"; // Example extra route

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/staff" element={<StaffList />} />
      <Route path="/admin-users" element={<AdminUsers />} />
      <Route path="/all-tasks" element={<Tasks />} />
      <Route path="/performance-cycle" element={<PerformanceCycle />} />
      <Route path="/staff-detail" element={<StaffDetail />} />
      <Route path="/staff-task" element={<StaffTask />} />
      <Route path="/staff-competency" element={<StaffCompetency />} />
      <Route path="/appraisal-forms" element={<AppraisalForms />} />
      <Route path="/professional-forms" element={<ProfessionalForm />} />
      <Route path="/operational-forms" element={<OperationalForm />} />
      <Route path="/blank-forms" element={<BlankForm />} />
      <Route path="/appraisal-activities" element={<AppraisalActivities />} />
      <Route path="/appraisal-activity-detail" element={<AppraisalActivityDetail />} />
      <Route path="/competency" element={<Competency />} />
      <Route path="/competency-rating" element={<CompetencyRating />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/complaint-detail" element={<ComplaintDetail />} />
      <Route path="/perspectives" element={<Perspectives />} />
      <Route path="/company" element={<Company />} />
      <Route path="/company-detail" element={<CompanyDetail />} />
      <Route path="/company-departments" element={<CompanyDepartments />} />
      <Route path="/company-staff" element={<CompanyStaff />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/department-members" element={<DepartmentMembers />} />
      <Route path="/department-detail" element={<DepartmentDetail />} />
      <Route path="/department-tasks" element={<DepartmentTask />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/designations" element={<Designation />} />
      <Route path="/appraisal-rating" element={<AppraisalRating />} />
    </Routes>
  );
}

export default App;
