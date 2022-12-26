import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { Outlet } from "react-router-dom";

import useStyles from "./styles";
import { accessTokenSelector } from "../../../selectors/userSelector";

import Footer from "../../../components/Footer";
import NavBar from "../../NavBar";
import ScrollToTop from "../ScrollToTop";
import AppAutoScroll from "../AppAutoScroll";

const Main = () => {
  const styles = useStyles();
  const accessToken = useSelector(accessTokenSelector);

  return accessToken ? (
    <>
      <AppAutoScroll />
      <ScrollToTop />
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
