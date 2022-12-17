import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PersonIcon from "@mui/icons-material/Person";

import useStyles from "./styles";
import { logoutUser } from "../../../../slices/userSlice";

const Dropdown = ({ setOpenDropdown, user }) => {
  const styles = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/welcome");
  };

  return (
    <div className={styles.container} onClick={() => setOpenDropdown(false)}>
      <Link
        title="Profile"
        className={styles.dropdownItem}
        to={"/art/gallery?author=" + user?.userName}
      >
        <PersonIcon />
        <h5 className={styles.text}>{user?.fullName}</h5>
      </Link>
      <Link title="Art manage" className={styles.dropdownItem} to="/manage">
        <PhotoSizeSelectActualIcon />
        <h5 className={styles.text}>Manage</h5>
      </Link>
      <div
        title="Log out"
        className={styles.dropdownItem}
        onClick={handleLogout}
      >
        <LogoutIcon />
        <h5 className={styles.text}>Logout</h5>
      </div>
    </div>
  );
};

export default Dropdown;
