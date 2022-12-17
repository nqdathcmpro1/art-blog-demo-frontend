import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useStyles from "./styles";

const ScrollToTop = () => {
  const styles = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(document.documentElement.scrollTop)
    })
  }, []);

  return scrollPosition > 0 ? (
    <ArrowUpwardIcon
      onClick={handleScrollTop}
      className={styles.arrowScrollTop}
    />
  ) : (
    <></>
  );
};

export default ScrollToTop;
