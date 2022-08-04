import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { loginUserStatusGetActions } from "../../redux/actions/loginUserActions";
import { bookTicketSetActions, bookTicketGetActions } from "../../redux/actions/bookTicketActions";
import { singleUserGetActions } from "../../redux/actions/singleUserDataActions";
import "./AirlineDetails.css";

const AirlineDetails = () => {
  const [airlineData, setAirlineData] = useState([]);
  const { airlineId } = useParams();
  const dispatch = useDispatch();
  // console.log(airlineId);

  useEffect(() => {
    dispatch(loginUserStatusGetActions());
    dispatch(bookTicketGetActions());
    dispatch(singleUserGetActions());
    dispatch(bookTicketSetActions(true))
    // dispatch(bookTicketActions(true));
    // localStorage.setItem("bookTicketStatus", JSON.stringify(true));
    axios
      .get(`http://localhost:5000/airlinesdata/${airlineId}`)
      .then((res) => setAirlineData(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(airlineData);

  const { logo, name, website, country, head_quaters, established, slogan } = airlineData;

  return (
    <>
      <div className="cards_details_section">
        <div className="cards_description">
          <div className="card_description_img">
            <img src={logo} alt="airlinelogo" />
          </div>
          <div className="card_brand_details">
            <h3>Details</h3>
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
              Visit {name}
            </a>
            <span>Country</span>
            <span>{country}</span>
            <hr></hr>
            <h3>Head Quarters</h3>
            <p>{head_quaters}</p>
          </div>
        </div>
        <div className="airline_details_section">
          <div className="airline_name_details">
            <h2>{name} ({established})</h2>
            <span>{`" ${slogan} "`}</span>
          </div>
          <div className="airline_contact_details">
            <h3>Airline Description</h3>
            <a
              href={"https://wa.me/" + 9191919199}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact to Airline
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirlineDetails;
