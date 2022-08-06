import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsersAction } from "../../redux/actions/fetchUsersDataActions";
// import { loginUserStatusSetActions, loginUserStatusGetActions } from "../../redux/actions/loginUserActions";
// import { bookTicketSetActions, bookTicketGetActions } from "../../redux/actions/bookTicketActions";
// import { singleUserSetActions, singleUserGetActions } from "../../redux/actions/singleUserDataActions";
import { fetchUsers, setLoginUserStatus, getLoginUserStatus, setSingleUser, getSingleUser } from '../../redux_toolkit/slices/userDataSlice';
import { setBookTicketStatus, getBookTicketStatus } from '../../redux_toolkit/slices/airlinesDataSlice';
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../UI/FormInput";
import "./LoginForm.css";

const LoginForm = ({ saveAuth }) => {
  const dispatch = useDispatch();

  const intialValues = {
    emailid: "",
    password: "",
  };

  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const usersData = useSelector((state) => state.userData.UsersData);

  const loginHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));

    if (Object.keys(validate(formValues)).length === 0) {
      const usersEmail = usersData.map((user) => user.emailid);
      const userExist = usersEmail.includes(formValues.emailid);

      if (userExist) {
        const findUser = usersData.find(
          (userData) => userData.emailid === formValues.emailid
        );
        dispatch(setSingleUser(findUser));
        if (findUser.password === formValues.password) {
          dispatch(setLoginUserStatus(true));
          dispatch(setBookTicketStatus(true));
          saveAuth("auth");
          Navigate("/dashboard");
        } else {
          alert("Kindly Check Password");
        }
      } else {
        alert("Kindly Check Emailid");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // console.log(formValues);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(getLoginUserStatus());
    dispatch(getBookTicketStatus());
    dispatch(getSingleUser());
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.emailid) {
      errors.emailid = "Emailid is required!";
    } else if (!regex.test(values.emailid)) {
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
    <div className="loginform_bg">
      <div className="form_card login_card">
        <form>
          <FormInput
            inputLabel="Email ID :"
            inputType="email"
            inputName="emailid"
            inputValue={formValues.emailid}
            errorMessage={formErrors.emailid}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input"}
          />
          <FormInput
            inputLabel="Password :"
            inputType="password"
            inputName="password"
            inputValue={formValues.password}
            errorMessage={formErrors.password}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input"}
          />

          <div className="form_input login_btn">
            <button className="form_btn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
      <Link className="form_card navigate_signup" to="/register">
        Create an account
      </Link>
    </div>
  );
};

export default LoginForm;
