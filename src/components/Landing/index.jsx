import React, { useState, memo, useEffect } from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";
import WelcomeText from "./WelcomeText";
import Loader from "./Loader";

import { pendingSelector } from "../../selectors/userSelector";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(null);

  const pending = useSelector(pendingSelector);

  useEffect(() => {
    document.title = "Welcome to ArtStudio";
    setIsLogin(true);
  }, []);

  const styles = useStyles();


  return (
    <div className={styles.container}>
      { pending && <Loader /> }
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
