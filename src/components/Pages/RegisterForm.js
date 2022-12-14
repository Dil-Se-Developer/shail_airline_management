import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addUserData,
//   fetchUsersAction,
// } from "../../redux/actions/fetchUsersDataActions";
// import { loginUserStatusSetActions, loginUserStatusGetActions } from "../../redux/actions/loginUserActions";
// import { bookTicketSetActions, bookTicketGetActions } from "../../redux/actions/bookTicketActions";
// import { singleUserSetActions, singleUserGetActions } from "../../redux/actions/singleUserDataActions";
import { addUserData, fetchUsers, setLoginUserStatus, getLoginUserStatus, setSingleUser, getSingleUser } from '../../redux_toolkit/slices/userDataSlice';
import { setBookTicketStatus, getBookTicketStatus } from '../../redux_toolkit/slices/airlinesDataSlice';
import { useNavigate } from "react-router-dom";
import FormInput from "../UI/FormInput";
import "./RegisterForm.css";

const RegisterForm = ({ saveAuth }) => {
  const dispatch = useDispatch();

  const intialValues = {
    firstname: "",
    lastname: "",
    gender: "male",
    mobileno: "",
    emailid: "",
    password: "",
  };

  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const usersData = useSelector((state) => state.userData.UsersData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    const userEmaild = usersData.map((user) => user.emailid);
    const userEmaildExist = userEmaild.includes(formValues.emailid);

    if (userEmaildExist) {
      alert("user already exit");
      return;
    }

    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(addUserData(formValues));
      dispatch(setSingleUser(formValues));
      dispatch(setLoginUserStatus(true));
      dispatch(setBookTicketStatus(true));
      saveAuth('auth');
      Navigate("/dashboard");
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(getLoginUserStatus());
    dispatch(getBookTicketStatus());
    dispatch(getSingleUser());
  }, []);


  const validate = (values) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexmobileno = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.mobileno) {
      errors.mobileno = "Mobile No. is required!";
    } else if (values.mobileno.length !== 10) {
      errors.mobileno = "Mobile No. must be 10 digits.";
    } else if (!regexmobileno.test(values.mobileno)) {
      errors.mobileno = "This is not a valid Mobile No !";
    }
    if (!values.emailid) {
      errors.emailid = "Emailid is required!";
    } else if (!regexemail.test(values.emailid)) {
      errors.emailid = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="register_bg">
      <div className="form_card">
        <form>
          <FormInput
            inputLabel="First Name: "
            inputType="text"
            inputName="firstname"
            inputValue={formValues.firstname}
            onHandleChange={handleChange}
            errorMessage={formErrors.firstname}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <FormInput
            inputLabel="Last Name: "
            inputType="text"
            inputName="lastname"
            inputValue={formValues.lastname}
            onHandleChange={handleChange}
            errorMessage={formErrors.lastname}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <p className="radio_heading">Gender: </p>
          <div className="form_radio_group">
            <FormInput
              inputLabel="Male"
              inputType="radio"
              inputName="gender"
              inputValue="male"
              onHandleChange={handleChange}
              // errorMessage={formErrors.lastname}
              customClass={"form_radio"}
              checked={formValues.gender === "male"}
            />

            <FormInput
              inputLabel="Female"
              inputType="radio"
              inputName="gender"
              inputValue="female"
              onHandleChange={handleChange}
              // errorMessage={formErrors.lastname}
              customClass={"form_radio"}
              checked={formValues.gender === "female"}
            />
          </div>

          <FormInput
            inputLabel="Mobile No: "
            inputType="tel"
            inputName="mobileno"
            inputValue={formValues.mobileno}
            onHandleChange={handleChange}
            errorMessage={formErrors.mobileno}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <FormInput
            inputLabel="Email ID: "
            inputType="email"
            inputName="emailid"
            inputValue={formValues.emailid}
            onHandleChange={handleChange}
            errorMessage={formErrors.emailid}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <FormInput
            inputLabel="Password: "
            inputType="password"
            inputName="password"
            inputValue={formValues.password}
            onHandleChange={handleChange}
            errorMessage={formErrors.password}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <div className="form_input login_btn">
            <button onClick={registerHandler} className="form_btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
