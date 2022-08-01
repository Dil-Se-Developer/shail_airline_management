import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { bookTicketDetailActions } from "../../redux/actions/bookTicketDetailActions";
import FormInput from "../UI/FormInput";
import "./BookTicket.css";

const BookTicket = () => {
  const dispatch = useDispatch();
  // let i = 0;
  const intialValues = {
    name: "",
    emailid: "",
    seats: 1,
    airlinename: "Quatar Airways",
    datetime: "",
    departure: "",
    arrival: "",
    passenger2: "",
    passenger3: "",
  };

  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(bookTicketActions(false));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const extraPassengers = new Array(formValues.seats ? parseInt(formValues.seats)-1: '').fill('');
  // console.log(formValues, "formvalues");
  // console.log(extraPassengers,'extrapassengers');
  // console.log(formErrors, 'errors');

  const bookTicketHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(bookTicketDetailActions(formValues));
      Navigate("bookticketdetails");
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Passenger 1 Name is required!";
    }
    if (!values.emailid) {
      errors.emailid = "Emailid is required!";
    }
    if (!values.seats) {
      errors.seats = "Seat No. is required!";
    } else if (parseInt(values.seats) <= 0 || parseInt(values.seats) > 3) {
      errors.seats = "Enter valid seat no. from 1 to 3";
    }
    if (!values.datetime) {
      errors.datetime = "DateTime is required!";
    }
    if (!values.departure) {
      errors.departure = "Departure Location is required!";
    }
    if (!values.arrival) {
      errors.arrival = "Arrival Location is required!";
    }
    if (!values.passenger2 && extraPassengers.length === 1) {
      errors.passenger2 = "Passenger 2 Name is required!";
    }
    if (!values.passenger3 && extraPassengers.length === 2) {
      errors.passenger3 = "Passenger 3 Name is required!";
    }
    return errors;
  };

  const today = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  // console.log(today);

  return (
    <div className="bookticket_bg">
      <div className="form_card bookticket_card">
        <form>
          <FormInput
            inputLabel="Passenger 1 :"
            inputType="text"
            inputName="name"
            inputValue={formValues.name}
            onHandleChange={handleChange}
            errorMessage={formErrors.name}
            errorClass={"error_para"}
            customClass={"form_input bookticket_name_input"}
          />
          <div className="bookticket_inputbox">
            <FormInput
              inputLabel="Email ID :"
              inputType="email"
              inputName="emailid"
              inputValue={formValues.emailid}
              onHandleChange={handleChange}
              errorMessage={formErrors.emailid}
              errorClass={"error_para"}
              customClass={"form_input bookTicket_email"}
            />
            <FormInput
              inputLabel="No. of Seats :"
              inputType="number"
              inputName="seats"
              inputValue={formValues.seats}
              onHandleChange={handleChange}
              errorMessage={formErrors.seats}
              errorClass={"error_para"}
              customClass={"form_input bookTicket_email"}
              min={1}
              max={3}
            />
          </div>
          {/* {parseInt(formValues.seats) === 2 ? (
            <FormInput
              inputLabel="Name :"
              inputType="text"
              inputName="name"
              inputValue={formValues.name}
              onHandleChange={handleChange}
              errorMessage={formErrors.name}
              errorClass={"error_para"}
              customClass={"form_input bookticket_name_input"}
            />
          ) : parseInt(formValues.seats) === 3 ? (
            <>
            <FormInput
              inputLabel="Name :"
              inputType="text"
              inputName="name"
              inputValue={formValues.name}
              onHandleChange={handleChange}
              errorMessage={formErrors.name}
              errorClass={"error_para"}
              customClass={"form_input bookticket_name_input"}
            />
            <FormInput
              inputLabel="Name :"
              inputType="text"
              inputName="name"
              inputValue={formValues.name}
              onHandleChange={handleChange}
              errorMessage={formErrors.name}
              errorClass={"error_para"}
              customClass={"form_input bookticket_name_input"}
            />
            </>
          ) : (
            <div></div>
          )} */}
          
          {/* { 
            let i = 0;
            while(i < parseInt(formValues.seats)) {    
              (<FormInput
              inputLabel="Name :"
              inputType="text"
              inputName="name"
              inputValue={formValues.name}
              onHandleChange={handleChange}
              errorMessage={formErrors.name}
              errorClass={"error_para"}
              customClass={"form_input bookticket_name_input"}
            />)
            i++;
            }
          } */}
          {extraPassengers.length >= 1 && extraPassengers.length <= 2 && 
            extraPassengers.map((extraPassenger, index) => <FormInput
            inputLabel={`Passenger ${index+2} :`}
            inputType="text"
            inputName={`passenger${index+2}`}
            inputValue={formValues[`passenger${index+2}`]}
            onHandleChange={handleChange}
            errorMessage={formErrors[`passenger${index+2}`]}
            errorClass={"error_para"}
            customClass={"form_input bookticket_name_input"}
            key={index}
          />)
          }
          <div className="bookticket_inputbox">
            <div className="bookticket_dropdown">
              <label htmlFor="airlinename">Select Airline :</label>
              <select
                name="airlinename"
                id="airlinename"
                onChange={handleChange}
              >
                <option value="Quatar Airways">Quatar Airways</option>
                <option value="Singapore Airlines">Singapore Airlines</option>
                <option value="Emirates">Emirates</option>
                <option value="Eva Air">Eva Air</option>
              </select>
            </div>
            <FormInput
              inputLabel="Select Date and Time :"
              inputType="datetime-local"
              inputName="datetime"
              // inputValue={formValues.datetime}
              onHandleChange={handleChange}
              errorMessage={formErrors.datetime}
              errorClass={"error_para"}
              customClass={"form_input datetime_input"}
              min={today}
            />
          </div>
          <div className="bookticket_inputbox">
            <FormInput
              inputLabel="Departure Location :"
              inputType="text"
              inputName="departure"
              inputValue={formValues.departure}
              onHandleChange={handleChange}
              errorMessage={formErrors.departure}
              errorClass={"error_para"}
              customClass={"form_input"}
            />
            <FormInput
              inputLabel="Arrival Location :"
              inputType="text"
              inputName="arrival"
              inputValue={formValues.arrival}
              onHandleChange={handleChange}
              errorMessage={formErrors.arrival}
              errorClass={"error_para"}
              customClass={"form_input"}
            />
          </div>
          <div className="form_input login_btn">
            <button className="form_btn" onClick={bookTicketHandler}>
              Book Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
