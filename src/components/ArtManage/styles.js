import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",
    minHeight: "100%",

    margin: "0 auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  table: {
    width: "100%",
    
    marginTop: "50px",
  },
  addButton: {
    width: "70%",
    height: "20vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "5px dashed black",
    borderRadius: "15vmin",

    cursor: "pointer",

    "& img": {
      height: "90%",

      objectFit: "contain",

      "@media only screen and (max-width: 500px)" :{
        width: "90%"
      }
    },
  },
});
