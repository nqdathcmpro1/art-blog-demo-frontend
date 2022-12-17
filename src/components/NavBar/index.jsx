import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";
import { currentUserSelector } from "../../selectors/userSelector";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Menu from "./Menu";

const NavBar = () => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const location = useLocation();


  const user = useSelector(currentUserSelector);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(e.target.innerWidth);
    });
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Logo />
        <SearchBox />
        <Menu windowSize={windowSize} user={user} />
      </div>
    </div>
  );
};

export default memo(NavBar);
