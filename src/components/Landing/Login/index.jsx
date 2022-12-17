import React, { useState, useEffect, useContext, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { loginUser } from "../../../slices/userSlice";
import useStyles from "./styles";
import {
  loginErrorSelector,
  accessTokenSelector,
} from "../../../selectors/userSelector";
import Input from "../Input";

const Login = ({ setIsLogin }) => {
  const styles = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const error = useSelector(loginErrorSelector);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("This field is required."),
      password: Yup.string().required("This field is required."),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
   await dispatch(loginUser(values));
      setSubmitting(false);
      resetForm();
      navigate("/");
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  const handleRedirect = () => {
    setIsLogin(false);
    setErrorMessage(null);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Login</h1>
      </div>
      <div className={styles.formError}>
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputBox}>
          <Input
            className={styles.input}
            label="User name"
            value={formik.values.userName}
            name="userName"
            onChange={formik.handleChange}
            errorMessage={formik.errors.userName}
          />
          <Input
            className={styles.input}
            label="Password"
            value={formik.values.password}
            name="password"
            isPasswordInput={true}
            onChange={formik.handleChange}
            errorMessage={formik.errors.password}
          />
          <button type="submit" className={styles.submitButton}>
            Log in
          </button>
        </div>
      </form>
      <div className={styles.redirectRegister} onClick={handleRedirect}>
        Doesn't have an account ? Register now !
      </div>
    </div>
  );
};

export default memo(Login);
