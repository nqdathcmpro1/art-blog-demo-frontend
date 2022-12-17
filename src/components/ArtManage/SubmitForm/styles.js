import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    height: "100%",
    width: "100%",

    position: "fixed",
    top: "0",
    left: "0",

    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "99",

    overflowY: "auto",
  },

  submitForm: {
    width: "900px",
    height: "600px",

    padding: "2vh 2vw",

    margin: "50px 0",

    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",

    border: "1px solid #000",
    borderRadius: "30px",
    zIndex: "999",
  },

  imageContainer: {
    width: "50%",
    height: "100%",

    display: "flex",

    justifyContent: "center",
  },

  titleInput: {
    height: "30px",
    width: "100%",

    border: "none",
    fontSize: "20px",
    fontWeight: "bold",
    "&:focus": {
      borderColor: "blue",
      borderStyle: "none none solid none",
      outline: "none",
    },
  },

  textContainer: {
    width: "50%",
    height: "100%",

    paddingLeft: "4vw",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  titleInputContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  titleInputLabel: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  editButtons: {
    width: "100%",

    display: "flex",
    alignItems: "center",

    justifyContent: "space-evenly",
  },
  buttons: {
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
  previewImg: {
    maxHeight: "100%",
    maxWidth: "100%",

    objectFit: "contain",
    cursor: "pointer",
    borderRadius: "30px",
    "& img": {
      width: "100%",
    },
  },

  fileUpload: {
    display: "none",
  },

  "@media only screen and (max-width:700px)": {
    submitForm: {
      flexDirection: "column",
      padding: "20px",
    },

    imageContainer: {
      width: "100%",
      height: "60%",

      display: "flex",
      justifyContent: "center",
    },

    textContainer: {
      width: "100%",
      height: "40%",

      paddingLeft: "0",
    },

    titleInputLabel: {
      fontSize: "8vw",
    },

    buttons: {
      padding: "5px",
    },
  },
});
