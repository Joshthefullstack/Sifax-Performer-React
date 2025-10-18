import React from "react";
import "../assets/css/dashboard.css";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconBg?: string; // optional background color for icon
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  color,
  subtitle,
  icon,
  iconBg,
}) => {
  return (
    <div className="stat-card" style={{ borderLeft: `5px solid ${color}` }}>
      <div className="stat-top">
        <div
          className="stat-icon"
          style={{
            backgroundColor: iconBg || "#f0f0f0",
          }}>
          {icon}
        </div>
        <h3>{value}</h3>
      </div>

      <p>{title}</p>
      {subtitle && <small className="stat-subtitle">{subtitle}</small>}
    </div>
  );
};

export default StatCard;
