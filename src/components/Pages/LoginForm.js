import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAction } from "../../redux/actions/fetchUsersDataActions";
import { loginUserActions } from "../../redux/actions/loginUserActions";
import { bookTicketActions } from "../../redux/actions/bookTicketActions";
import { singleUserDataActions } from "../../redux/actions/singleUserDataActions";
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
  const usersData = useSelector((state) => state.fetchUsersData.UsersData);
  // const airlinesData = useSelector((state) => state.airlinesData.AirlinesData);
  // console.log(airlinesData, 'loginform');
  // console.log(usersData);

  const loginHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));

    if (Object.keys(validate(formValues)).length === 0) {
      const usersEmail = usersData.map((user) => user.emailid);
      // const usersPassword = usersData.map((user) => user.password);
      const userExist = usersEmail.includes(formValues.emailid);

      if (userExist) {
        const findUser = usersData.find(
          (userData) => userData.emailid === formValues.emailid
        );
        dispatch(singleUserDataActions(findUser));
        // console.log(findUser.password, "find");
        // console.log(formValues.password, 'formval');
        if (findUser.password === formValues.password) {
          dispatch(loginUserActions(true));
          dispatch(bookTicketActions(true));
          saveAuth('auth');
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
    dispatch(fetchUsersAction());
    dispatch(loginUserActions(false));
    dispatch(bookTicketActions(false));
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
