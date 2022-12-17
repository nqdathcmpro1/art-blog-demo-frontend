import React, { useState, memo, useEffect } from "react";

import useStyles from "./styles";
import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";
import WelcomeText from "./WelcomeText";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    document.title = "Welcome to ArtStudio";
    setIsLogin(true);
    
  }, []);

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sloganContainer}>
          <WelcomeText />
        </div>
        <div className={styles.form}>
          <Tabs isLogin={isLogin} setIsLogin={setIsLogin} />
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Landing);
