import { makeStyles } from "@mui/styles";

export default makeStyles({
  formContainer: {
    width: "100%",
    height: "100%",
    minHeight: "550px",

    border: "3px solid white",
    borderRadius: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.5)",

    color: "white",

    animation: `$slideRightToLeft 100ms linear`,
  },

  formHeader: {
    width: "80%",
    height: "10%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: "50px",
    userSelect: "none",
  },

  formError: {
    width: "200px",
    height: "5%",
  },

  errorMessage: {
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "red",
    backgroundColor: "#f09cbb",

    fontSize: "14px",
    fontWeight: "bold",
    fontStretch: "normal",

    border: "1px solid red",
    borderRadius: "10px",
  },

  form: {
    width: "70%",
    height: "70%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    minWidth: "100%",
    minHeight: "70vh",

    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  submitButton: {
    width: "100%",

    padding: "0 50px",

    borderRadius: "20px",
    borderColor: "white",

    fontSize: "1.5rem",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  redirectRegister: {
    width: "80%",
    height: "5%",

    fontSize: "12px",
    textDecoration: "none",
    color: "white",
    fontStyle: "italic",
    cursor: "pointer",
  },

  "@keyframes slideRightToLeft": {
    from: {
      transform: "translateX(50%)",
    },
    to: {
      transform: "translateX(0)",
    },
  },
});
