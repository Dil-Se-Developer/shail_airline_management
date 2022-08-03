import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AirlineCard from "./AirlineCard";
import { fetchAirlinesDataAction } from "../../redux/actions/fetchAirlinesDataActions";
import { loginUserStatusGetActions } from "../../redux/actions/loginUserActions";
import { bookTicketGetActions } from "../../redux/actions/bookTicketActions";
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { singleUserGetActions } from "../../redux/actions/singleUserDataActions";
import "./Dashboard.css";


const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirlinesDataAction());
    dispatch(loginUserStatusGetActions());
    dispatch(bookTicketGetActions());
    dispatch(singleUserGetActions());
    // dispatch(bookTicketActions(true));
    localStorage.setItem("bookTicketStatus", JSON.stringify(true));
  }, [])

  const airlinesData = useSelector((state) => state.airlinesData.AirlinesData);
  // console.log(airlinesData, 'loginform');

  const airlinesFilterData = airlinesData.filter(
    (airlineData) => (airlineData.id != null && airlineData.id > 0 && airlineData.id <= 12)
  );
  // console.log(airlinesFilterData, 'airlinesfilterdata');

  return (
    <div className="airline_cards">
      {airlinesFilterData.map((airlineFilterData) =>
        <AirlineCard airlineFilterData={airlineFilterData} key={airlineFilterData.id} />)}
    </div>
  );
};

export default Dashboard;
