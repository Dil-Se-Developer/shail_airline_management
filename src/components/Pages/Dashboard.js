import React from "react";
import { useSelector } from "react-redux";
import AirlineCard from "./AirlineCard";
import "./Dashboard.css";

const Dashboard = () => {
  const airlinesData = useSelector((state) => state.airlinesData.AirlinesData);
  // console.log(airlinesData, 'loginform');

  const airlinesFilterData = airlinesData.filter(
    (airlineData) => (airlineData.id != null && airlineData.id > 0 && airlineData.id <= 15)
  );
  console.log(airlinesFilterData, 'airlinesfilterdata');

  return (
    <div className="airline_cards">
      {airlinesFilterData.map((airlineFilterData) => 
        <AirlineCard airlineFilterData={airlineFilterData} key={airlineFilterData.id} />)}
    </div>
  );
};

export default Dashboard;
