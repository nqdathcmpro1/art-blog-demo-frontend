import { makeStyles } from "@mui/styles";

export default makeStyles({
  menu: {
    minWidth: "45px",
    maxWidth: "25%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  menuIcon: {
    height: "30px",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",

    color: "black",

    textDecoration: "none",
  },

  menuSingle: {
    minWidth: "45px",
    maxHeight: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
  },
  avatar: {
    width: "45px",
    height: "45px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    objectFit: "cover",
    transfrom: "scale(0.1, 0.2)",
  },
});
