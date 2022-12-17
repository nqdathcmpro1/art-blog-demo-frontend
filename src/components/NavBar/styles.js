import { makeStyles } from "@mui/styles";

export default makeStyles({
  nav: {
    width: "100%",
    height: "70px",

    position: "fixed",
   
    
    backgroundColor: "white",
    boxShadow: "0 1px 10px #888888",
    zIndex: "99",
  },

  container : {
    width: '90%',
    height: '100%',

    margin: '0 auto',

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
  }

});
