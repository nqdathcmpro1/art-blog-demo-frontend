import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
  },

  authorBanner: {
    minWidth: "100%",
    minHeight: "300px",
    maxHeight: "400px",

    objectFit: "fill",
    overflow: "hidden",
    

    "& img": {
      minWidth: "100%",
      height: "100%",

      alignSelf: "center",
      objectFit: "cover",
      zIndex: "1",
    },
  },

  authorDetail: {
    width: "80vw",
    height: "100%",

    margin: "0 auto",
    padding: "0",

    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "center",

    listStyle: "none",
  },

  authorAvatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",

    objectFit: "cover",
  },

  authorName: {
    maxWidth: "100%",

    fontSize: "3rem",
    textAlignLast: "center",
    fontWeight: "bold",
  },

  authorUserName: {
    maxWidth: "100%",

    fontSize: "1.25rem",
    textAlignLast: "center",
  },

  authorStatus: {
    maxWidth: "100%",

    marginTop: "5vh",

    fontSize: "1rem",
    fontStyle: "italic",
    whiteSpace: "pre-line",
    textAlign: "center",
    textAlignLast: "center",
    wordWrap: "break-word",
  },

  editButton: {
    width: "200px",

    position: "fixed",
    top: "100px",
    left: "5%",

    padding: "5px 6px",

    border: "0",
    borderRadius: "10px",

    fontSize: "1.5rem",
    backgroundColor: "black",
    color: "white",

    cursor: "pointer",
    zIndex: "8",
  },

  editBtnText: {
    display: "inline-block",
  },

  artContainer: {
    marginTop: "50px"
  },

  "@media only screen and (max-width:700px)": {
    authorDetail: {

    },

    authorAvatar: {
      width: "30vw",
      height: "30vw"
    },

    authorName: {
      fontSize: "7vw"
    },

    authorUserName: {
      fontSize: "3vw"
    },

    editBtnText: {
      display: "none",
    },

    editButton: {
      borderRadius: "50%",
      width: "40px",
    },
  },
});
