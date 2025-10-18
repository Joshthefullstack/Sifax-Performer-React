import React from "react";
import "../assets/css/dashboard.css";

interface Complaint {
  title: string;
  staff: string;
  subsidiary: string;
  department: string;
  priority: string;
  status: "Pending" | "Complete" | "Overdue" | "In Progress";
}

const complaints: Complaint[] = [
  {
    title: "System outage in branch",
    staff: "John Doe",
    subsidiary: "FinServe Ltd",
    department: "IT Support",
    priority: "High",
    status: "Pending",
  },
  {
    title: "Late payroll processing",
    staff: "Sarah Johnson",
    subsidiary: "PayRight Co.",
    department: "Accounts",
    priority: "Medium",
    status: "Complete",
  },
  {
    title: "Broken office printer",
    staff: "Michael Smith",
    subsidiary: "PrintEase",
    department: "Admin",
    priority: "Low",
    status: "Overdue",
  },
  {
    title: "Network latency issue",
    staff: "Grace Peters",
    subsidiary: "TechNet Ltd",
    department: "Network Ops",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Staff ID not working",
    staff: "David Brown",
    subsidiary: "AccessCorp",
    department: "HR",
    priority: "Low",
    status: "Pending",
  },
];

const ComplaintTable: React.FC = () => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "Complete":
        return "status complete";
      case "Overdue":
        return "status overdue";
      case "In Progress":
        return "status in-progress";
      default:
        return "status";
    }
  };

  return (
    <div className="table-card">
      <h3>Recent Complaints</h3>
      <table className="complaint-table">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>STAFF</th>
            <th>SUBSIDIARY</th>
            <th>DEPARTMENT</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.staff}</td>
              <td>{item.subsidiary}</td>
              <td>{item.department}</td>
              <td>{item.priority}</td>
              <td>
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;
