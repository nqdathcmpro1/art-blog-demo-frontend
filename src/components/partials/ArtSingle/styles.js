/* eslint-disable no-dupe-keys */
import { makeStyles } from "@mui/styles";

export default makeStyles({
  manageButton: {
    width: "30px",
    height: "30px",

    position: "absolute",
    top: "10px",
    right: "10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.2)",
    cursor: "pointer",
  },

  artContainer: {
    witdh: "100%",

    overflow: "hidden",
    position: "relative",
    "&:hover": {
      opacity: "0.8",
      "& $manageButton": {
        opacity: "1",
      },
    },
    "& img": {
      borderRadius: "20px",
      width: "100%",
      height: "calc(100% - 20px)",
      objectFit: "cover",
      zIndex: "9",
    },
  },

  link: {
    width: "100%",

    textDecoration: "none",
    cursor: "zoom-in",
    color: "black",
  },

  authorContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    listStyle: "none",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  avatarContainer: {
    width: "30px",
    height: "30px",

    borderRadius: "50%",
  },

  authorAvatar: {
    minWidth: "100%",
    minHeight: "100%",

    objectFit: "cover",
  },

  authorName: {
    textDecoration: "none",
    textOverflow: "ellipsis",
    color: "black",
    fontStyle: "italic",
    listStyle: "none",
  },

  titleContainer: {
    witdh: "100%",
    lineHeight: "1rem",
    lineClamp: "1",
  },

  title: {
    witdh: "100%",

    overflow: "hidden",

    fontWeight: "bold",
    lineHeight: "1rem",
    lineClamp: "1",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    listStyle: "none",
  },

  "@keyframes hoverArt": {
    to: {
      transform: "translateY(-10px)",
    },
  },
});
