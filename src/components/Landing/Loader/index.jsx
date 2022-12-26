import React from "react";

import useStyles from "./styles";

const Loader = () => {
  const styles = useStyles();

  return <div className={styles.container}>Loading...</div>;
};

export default Loader;
