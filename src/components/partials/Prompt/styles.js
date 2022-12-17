import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",
    height: "100%",

    position: "fixed",
    top: "0",
    left: "0",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: "99999",

    
  },
  promptContainer: {
    width: "30vw",
    minWidth: "400px",
    minHeight: "30vh",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

    borderRadius: "5px",
    backgroundColor: "white",
    animation: `$promptAppear 500ms ease-in-out`,
    animationFillMode: "forwards",

    color: "black"

  },

  promptHeader: {
    maxWidth: "90%",
    maxHeight: "20%",

    margin: "0",
    padding: "0 20px",
  },

  promptTitle: {
    listStyle: "none",
    fontSize: "30px",
    fontWeight: "bold",
  },

  promptBody: {
    maxWidth: "90%",
    padding: "0 20px",
  },

  promptContent: {
    listStyle: "none",
  },

  promptButton: {
    width: "50%",

    bottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    padding: "5px 10px",

    backgroundColor: "white",
    border: "none",
    cursor: "pointer",

    fontSize: "20px",
  },

  submitButton: {
    color: "black",
  },

  closeButton: {
    color: "red",
  },

  "@keyframes promptAppear": {
    from: {
      transform: "translateY(-100vh)",
    },
    to: {
      transform: "translateY(0)",
    },
  },
});
