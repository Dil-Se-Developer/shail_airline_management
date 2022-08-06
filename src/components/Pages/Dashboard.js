import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AirlineCard from "./AirlineCard";
// import { fetchAirlinesDataAction } from "../../redux/actions/fetchAirlinesDataActions";
// import { loginUserStatusGetActions } from "../../redux/actions/loginUserActions";
// import { bookTicketSetActions, bookTicketGetActions } from "../../redux/actions/bookTicketActions";
// import { singleUserGetActions } from "../../redux/actions/singleUserDataActions";
import { getLoginUserStatus, getSingleUser } from '../../redux_toolkit/slices/userDataSlice';
import { fetchAirlinesData, setBookTicketStatus, getBookTicketStatus } from '../../redux_toolkit/slices/airlinesDataSlice';
import "./Dashboard.css";


const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirlinesData());
    dispatch(getLoginUserStatus());
    dispatch(getBookTicketStatus());
    dispatch(getSingleUser());
    dispatch(setBookTicketStatus(true));
  }, [])

  const airlinesData = useSelector((state) => state.airlinesData.AirlinesData);

  const airlinesFilterData = airlinesData.filter(
    (airlineData) => (airlineData.id != null && airlineData.id > 0 && airlineData.id <= 12)
  );

  return (
    <div className="airline_cards">
      {airlinesFilterData.map((airlineFilterData) =>
        <AirlineCard airlineFilterData={airlineFilterData} key={airlineFilterData.id} />)}
    </div>
  );
};

export default Dashboard;
