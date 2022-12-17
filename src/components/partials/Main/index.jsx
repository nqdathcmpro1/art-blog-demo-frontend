import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import useStyles from "./styles";
import { accessTokenSelector } from "../../../selectors/userSelector";
import Footer from "../../../components/Footer";

const Main = ({ children }) => {
  const styles = useStyles();
  const accessToken = useSelector(accessTokenSelector);

  return (
    accessToken ? (
      <>
        <div className={styles.content}>{children}</div>
        <Footer />
      </>
    ) : (
      <Navigate to="/welcome" />
    )
  );
};

export default Main;
