import React from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const airlinesData = useSelector((state) => state.airlinesData.AirlinesData);
  console.log(airlinesData, 'loginform');

  return <div>Dashboard</div>;
};

export default Dashboard;
