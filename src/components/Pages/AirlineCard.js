import React from "react";
import { useNavigate } from "react-router-dom";
import "./AirlineCard.css";

const AirlineCard = ({ airlineFilterData }) => {
  const Navigate = useNavigate();
  const { id, logo, name, country, established } = airlineFilterData;
  const airlineDetailsHandler = () => {
    Navigate(`${id}`);
  };
  return (
    <div className="airlinecard" onClick={airlineDetailsHandler}>
      <img src={logo} alt="airlineimg" />
      <h2>
        {name} ({established})
      </h2>
      <h3>{country} </h3>
    </div>
  );
};

export default AirlineCard;
