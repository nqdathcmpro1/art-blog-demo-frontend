import { makeStyles } from "@mui/styles";
import backgroundDesktop from "../../public/art-background-desktop.jpg";

export default makeStyles({
  container: {
    width: "100%",
    height: "100vh",

    backgroundImage: `url(${backgroundDesktop})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    display: "flex",
    justifyContent: "center",

    overflowY: "auto",
  },

  content: {
    width: "80%",
    height: "600px",

    margin: "50px 0",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sloganContainer: {
    width: "70%",
    height: "100%",

    display: "flex",
    alignItems: "center",
  },

  form: {
    width: "40%",
    minWidth: "300px",
    height: "100%",
    minHeight: "500px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  "@media only screen and (max-width:700px)": {
    sloganContainer: {
      display: "none",
    },

    content: {
      width: "100%",
    },
  },
});
