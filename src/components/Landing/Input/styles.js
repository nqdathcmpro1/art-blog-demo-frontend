import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  inputContainer: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  input: {
    width: "100%",
    borderStyle: "none none solid none",
    border: "2px solid white",

    color: "white",
    fontSize: "12px",

    backgroundColor: "transparent",
    "&:focus": {
      fontSize: "16px",
      outline: "none",
      "&::placeholder": {
        color: "gray",
      },
    },

    "&::placeholder": {
      color: "white",
    },
  },

  passwordButton: {
    cursor: "pointer",
  },

  errorContainer: {
    width: "100%",
    height: "10px",
  },

  error: {
    fontSize: "12px",
    color: "red",
  },
});
