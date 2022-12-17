import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      © Copyrighted {new Date().getFullYear()} | ArtStudio. All rights reserved.
    </div>
  );
};

export default Footer;
