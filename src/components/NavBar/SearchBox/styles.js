import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "50%",
    height: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  openSearch: {
    display: "none",
  },

  searchBarContainer: {
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  searchBar: {
    width: "100%",
    height: "100%",

    objectFit: "cover",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "1px solid black",
    borderRadius: "50px",

    backgroundColor: "#f0f0f0",
  },
  
  searchBox: {
    width: "90%",

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

  "@media only screen and (max-width:700px)": {
    searchBarContainer: {
      display: "none",
    },

    openSearch: {
      width: "40px",
      height: "40px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      border: "1px solid black",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",

      "&:hover": {
        cursor: "pointer",
      },
    },

    arrowBackContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
