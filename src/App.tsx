import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StaffList from "./pages/StaffList";
import AdminUsers from "./pages/AdminUsers";
// import Profile from "./pages/Profile"; // Example extra route

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/staff" element={<StaffList />} />
      <Route path="/admin-users" element={<AdminUsers/>}/>
    </Routes>
  );
}

export default App;
