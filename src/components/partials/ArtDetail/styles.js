/* eslint-disable no-dupe-keys */
import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    maxWidth: "100vw",
  },

  content: {
    width: "1000px",
    minHeight: "500px",

    display: "flex",

    margin: "0 auto",

    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",

    boxShadow: "5px 10px 10px #888888",
    overflow: "hidden",
  },

  artContainer: {
    width: "50%",
    height: "100%",

    "& img": {
      width: "calc(100% - 40px)",
      position: "relative",

      margin: "20px",
      borderRadius: "20px",
      overflow: "hidden",
    },
  },

  detailContainer: {
    witdh: "50%",
    minHeight: "90%",

    marginTop: "50px",

    display: "flex",
    flexDirection: "column",
    gap: "50px",

    listStyle: "none",
    textDecoration: "none",
    underline: "none",
  },

  title: {
    fontSize: "40px",
    fontWeight: "bold",
    listStyle: "none",
  },

  subTitle: {
    fontSize: "25px",
    "& span": {
      fontWeight: "bold",
    },
  },

  author: {
    minWidth: "10px",
    maxWidth: "100%",

    display: "flex",
    alignItems: "center",
    gap: "20px",

    textDecoration: "none",
    color: "black",
  },

  authorAvatar: {
    width: "50px",
    height: "50px",

    borderRadius: "50%",
    overflow: "hidden",

    "& img": {
      width: "100%",
      height: "100%",

      objectFit: "cover",
    },
  },

  "@media only screen and (max-width: 1000px)": {
    content: {
      width: "90%",

      margin: "0 auto",

      flexDirection: "column",
    },

    artContainer: {
      width: "100%",
    },

    detailContainer: {
      paddingLeft: "20px",
      paddingBottom: "50px",

      gap: "10px",
    },
  },
});
