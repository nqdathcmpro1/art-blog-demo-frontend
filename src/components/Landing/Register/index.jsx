import React, { useState, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { createUser } from "../../../slices/userSlice";
import {
  registerErrorSelector,
  registerSuccessSelector,
} from "../../../selectors/userSelector";
import useStyles from "./styles";
import Input from "../Input";

const Register = ({ setIsLogin }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      password: "",
      rePassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, "At least 8 characters")
        .max(50, "Equal or less than 50 characters")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Invalid name"
        )
        .required("This field is required"),
      userName: Yup.string()
        .min(6, "At least 6 characters")
        .max(20, "Equal or less than 20 characters")
        .required("This field is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/,
          "8-20 characters, at least one uppercase letter, one lowercase letter and one number"
        )
        .required("This field is required."),
      rePassword: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/,
          "8-20 characters, at least one uppercase letter, one lowercase letter and one number"
        )
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("This field is required."),
      email: Yup.string()
        .email("Must be a valid email")
        .required("This field is required."),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await dispatch(createUser(values));
      setIsLogin(false);
      setSubmitting(false);
      resetForm({ values: "" });
    }
  });

  const error = useSelector(registerErrorSelector);

  const success = useSelector(registerSuccessSelector);

  const promptForm = {
    form: "register",
    promptTitle: "Are you sure you want to register ?",
    promptContent:
      "Make sure you have already checked all of your information before registeration.",
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(error);
    setSuccessMessage(success);
  }, [error, success]);

  const styles = useStyles();

  const dispatch = useDispatch();

  const handleRedirect = () => {
    setIsLogin(true);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Register</h1>
      </div>
      <div className={styles.formError}>
        <div
          className={`${styles.message} ${
            errorMessage && styles.errorMessage
          } ${successMessage && styles.successMessage}`}
        >
          {errorMessage || successMessage}
        </div>
      </div>
      <form
        className={styles.form}
        id={promptForm.form}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.inputBox}>
          <Input
            label="Full name"
            value={formik.values.fullName}
            name="fullName"
            onChange={formik.handleChange}
            errorMessage={formik.errors.fullName}
          />
          <Input
            label="User name"
            value={formik.values.userName}
            name="userName"
            onChange={formik.handleChange}
            errorMessage={formik.errors.userName}
          />

          <Input
            label="Password"
            value={formik.values.password}
            isPasswordInput
            name="password"
            onChange={formik.handleChange}
            errorMessage={formik.errors.password}
          />

          <Input
            label="Re-password"
            value={formik.values.rePassword}
            isPasswordInput
            name="rePassword"
            onChange={formik.handleChange}
            errorMessage={formik.errors.rePassword}
          />

          <Input
            label="Email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            errorMessage={formik.errors.email}
          />
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </div>
      </form>
      <div className={styles.redirectLogin} onClick={handleRedirect}>
        Already have an account ? Log in now !
      </div>
    </div>
  );
};

export default memo(Register);
