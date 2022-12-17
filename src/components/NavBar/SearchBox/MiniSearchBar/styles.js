import { makeStyles } from "@mui/styles"

export default makeStyles({
  container: {
    width: '100%',
    height: '100%',

    position: 'absolute',
    top: '0',
    left: '0',

    display: "none",

    backgroundColor: 'white',

    "@media only screen and (max-width:700px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    }
  },

  searchBarContainer: {
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  searchBar: {
    width: "70%",
    height: "40px",

    objectFit: "cover",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "1px solid black",
    borderRadius: "50px",

    backgroundColor: "#f0f0f0",
  },
  searchBox: {
    width: "80%",

    display: "block",

    border: "0",
    backgroundColor: "transparent",
    fontSize: "12px",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    width: "10%",

    cursor: "pointer",
  },
  

      arrowBackContainer : {
        width: "5%",
        height: "100%",
        cursor: "pointer",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },


})