import React, { useState, useEffect, useRef, memo } from "react";

import defaultAvatar from "../../../public/default_profile.png";
import useStyles from "./styles";
import Dropdown from "./Dropdown";

const Menu = ({ user }) => {
  const styles = useStyles();

  const [openDropdown, setOpenDropdown] = useState(false);

  const btnRef = useRef();
  const clickRef = useRef(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.path.includes(btnRef.current))
       setOpenDropdown(false);
    };
      window.addEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <div className={styles.menu} ref={btnRef}>
        {user?.userName ? (
          <div
            className={styles.menuSingle}
            ref={btnRef}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <img
              src={user?.avatar || defaultAvatar}
              alt={user?.avatar || defaultAvatar}
              className={styles.avatar}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      {openDropdown ? (
        <Dropdown setOpenDropdown={setOpenDropdown} user={user} />
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Menu);
