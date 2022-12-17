import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100px",
    height: "50px",

    position: "absolute",
    top: "30px",
    right: "30px",

    padding: "5px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    border: "1px solid black",
    borderRadius: "10px",

    backgroundColor: "white",
    overflow: "hidden",
  },

  button: {
    width: "90%",
    height: "22px",

    paddingLeft: "10px",

    display: "flex",
    alignItems: "center",

    borderRadius: "5px",

    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e2d3d3",
    },
  },

  "@media only screen and (max-width: 500px)": {
    container: {
      width: "60px",

      right: "10px"
    },

    button: {
        justifyContent: "center",

        paddingLeft: "0",
        
    }
  },
});
