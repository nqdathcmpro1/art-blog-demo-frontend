import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",
    height: "100%",

    position: "fixed",
    top: "0",
    left: "0",

    display: "flex",
    justifyContent: "center",

    backgroundColor: "rgba(0,0,0, 0.8)",
    zIndex: "999",

    overflowY: "auto",
  },

  formContainer: {
    width: "900px",
    height: "800px",

    margin: "50px 0",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",

    borderRadius: "50px",

    backgroundColor: "white",
    overflow: "hidden",
  },

  title: {
    width: "100%",
    height: "10%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "1px solid gray",
  },

  profileForm: {
    width: "80%",
    height: "80%",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
  },

  imageForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  label: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  inputForm: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    width: "90%",
    height: "auto",

    fontSize: "1.25rem",

    backgroundColor: "transparent",

    border: "none",
    borderBottom: "3px solid black",
    "&:focus": {
      borderBottom: "3px solid blue",
      outline: "none",
    },
  },

  inputAvatar: {
    display: "none",
  },
  previewAvatar: {
    width: "250px",
    height: "250px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    overflow: "hidden",
    cursor: "pointer",
  },

  image: {
    width: "100%",

    objectFit: "contain",
  },

  buttonContainer: {
    width: "60%",
    height: "10%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  submitButton: {
    padding: "10px",

    borderRadius: "10%",

    backgroundColor: "black",
    cursor: "pointer",
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },

  "@media only screen and (max-width:500px)": {
    label: {
      fontSize: "5vw",
    },
    textInput: {
      fontSize: "4vw",
    },
  },
});
