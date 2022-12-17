import React from "react";

import useStyles from "./styles";

const WelcomeText = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.aboveText}>
        <h3>Infinite Art experience</h3>
      </div>
      <div className={styles.belowText}>
        <h1>Welcome to ArtStudio !</h1>
      </div>
    </div>
  );
};

export default WelcomeText;
