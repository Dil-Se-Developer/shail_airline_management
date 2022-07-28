import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { bookTicketDetailActions } from '../../redux/actions/bookTicketDetailActions';
import FormInput from "../UI/FormInput";
import './BookTicket.css';

const BookTicket = () => {
  const dispatch = useDispatch();

  const intialValues = {
    name: "",
    airlinename: "Quatar Airways",
    datetime: "",
    departure: "",
    arrival: "",
  }

  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(bookTicketActions(false));
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // console.log(formValues, 'formvalues');
  // console.log(formErrors, 'errors');
  

  const bookTicketHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(bookTicketDetailActions(formValues))
      Navigate("bookticketdetails");
    }
  }
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
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
    return errors;
  };

  return (
    <div className='bookticket_bg'>
      <div className="form_card bookticket_card">
        <form>
          <FormInput
            inputLabel="Name :"
            inputType="text"
            inputName="name"
            inputValue={formValues.name}
            onHandleChange={handleChange}
            errorMessage={formErrors.name}
            errorClass={"error_para"}
            customClass={"form_input"}
          />
          <div className='bookticket_inputbox'>
            <div className='bookticket_dropdown'>
              <label htmlFor='airlinename'>Select Airline :</label>
              <select name='airlinename' id='airlinename' onChange={handleChange}>
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
            />
          </div>
          <div className='bookticket_inputbox'>
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
  )
}

export default BookTicket