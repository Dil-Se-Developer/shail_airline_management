import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/air_india_logo.svg";
import { loginUserActions } from "../../redux/actions/loginUserActions";
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { MdAirplaneTicket } from "react-icons/md";
import "./Navbar.css";

const Navbar = ({ setAuth }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const loginStatus = useSelector((state) => state.loginStatus.loginStatus);
  const bookTicketStatus = useSelector(
    (state) => state.bookTicketStatus.bookTicketStatus
  );
  const singleUserData = useSelector(
    (state) => state.singleUserData.singleUserData
  );

  const userFirstName = singleUserData.firstname;
  // console.log(userFirstName);
  // console.log(singleUserData);
  // console.log(loginStatus, "login");
  // console.log(bookTicketStatus, "BookTicket");

  const loginHandler = () => {
    Navigate("/");
  };

  const registerHandler = () => {
    Navigate("/register");
  };

  const bookTicketHandler = () => {
    Navigate("dashboard/bookticket");
    dispatch(bookTicketActions(false));
  };

  const handleSelectChange = (event) => {
    let { value } = event.target;
    if (value === "logout") {
      localStorage.clear();
      setAuth();
      dispatch(loginUserActions(false));
      dispatch(bookTicketActions(false));
      Navigate("/");
    }
  };

  return (
    <div className="general_navbar">
      <img src={logo} alt="airindia_logo" />
      {!loginStatus ? (
        <div>
          <button onClick={loginHandler} className="navbar_btn">
            Login
          </button>
          <button onClick={registerHandler} className="navbar_btn">
            Register
          </button>
        </div>
      ) : (
        <div className="user_profile">
          <div className="user_profile_logo">{userFirstName[0]}</div>
          <div>
            <select
              className="user_profile_dropdown"
              name="user"
              id="user"
              onChange={handleSelectChange}
            >
              <option value="greetings">Hi,{userFirstName}!</option>
              <option value="logout">Logout</option>
            </select>
          </div>
          {bookTicketStatus ? (
            <div>
              <button className="book_ticket_btn" onClick={bookTicketHandler}>
                Book Ticket <MdAirplaneTicket size={"1.5rem"} />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
