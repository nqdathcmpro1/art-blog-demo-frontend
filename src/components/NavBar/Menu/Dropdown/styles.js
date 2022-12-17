import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "300px",

    position: "absolute",
    top: "65px",
    right: "5vw",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    backgroundColor: "white",
    boxShadow: "3px 3px 5px 3px #888888",
    borderRadius: "20px",
    overflow: "hidden"
  },

  dropdownItem: {
    height: '50px',
    width: "80%",

    margin: '5px',
    padding: '0 20px',

    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '20px',

    color: "black",
    fontSize: "1.25rem",
    listStyle: "none",
    textDecoration: "none",
    borderRadius: "10px",

    cursor: "pointer",
    '&:hover' : {
      backgroundColor: "#e2d3d3"
    }
  },

  text: {
    width: "100%",

  
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: "1rem"
  },

  "@media only screen and (max-width:400px)" :{
    container: {
      width: "40px"
    },

    text: {
      display: "none"
    }
  }
});
