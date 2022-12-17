import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    gap: "50px",

    overflow: "hidden",
  },

  aboveText: {
    fontSize: "2.5vw",
    color: "white",
    userSelect: "none",

    transform: "translateX(-100%)",
    animation: `$textAppear 2000ms ease-in-out forwards`,
  },

  belowText: {
    fontSize: "3vw",
    userSelect: "none",

    transform: "translateX(-100%)",
    animation: `$textAppear 2000ms 1000ms ease-in-out forwards`,
    color: "white",
  },

  "@keyframes textAppear": {
    to: {
      transform: "translateX(0)",
    },
  },
});
