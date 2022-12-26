import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { Outlet } from "react-router-dom";

import useStyles from "./styles";
import { accessTokenSelector } from "../../../selectors/userSelector";

import Footer from "../../../components/Footer";
import NavBar from "../../NavBar";

const Main = () => {
  const styles = useStyles();
  const accessToken = useSelector(accessTokenSelector);

  return accessToken ? (
    <>
      <NavBar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </>
  ) : (
    <Navigate to="/welcome" />
  );
};

export default Main;
