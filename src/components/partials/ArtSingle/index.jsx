import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Dropdown from "./Dropdown";
import useStyles from "./styles";
import defaultAvatar from "../../../public/default_profile.png"

const ArtSingle = ({ art, isAuthorPage, handleDelete, handleEdit }) => {
  const link = `/art/${art._id}`;

  const styles = useStyles();

  const openDropdownRef = useRef();

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.path.includes(openDropdownRef.current)) setIsOpenDropdown(false);
    };
      window.addEventListener("click", closeDropdown);
  }, []);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className={styles.artContainer}>
      {handleDelete && handleEdit && (
        <div className={styles.manageButton}>
          <MoreVertIcon
            sx={{ color: "white" }}
            className={styles.manageIcon}
            onClick={handleDropdown}
            ref={openDropdownRef}
          />
        </div>
      )}
      {isOpenDropdown && (
        <Dropdown
          art={art}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      <Link className={styles.link} to={link}>
        <img src={art.url} alt={art.title} />
        <div className={styles.titleContainer}>
          <li className={styles.title}>{art.title}</li>
        </div>
      </Link>
      {isAuthorPage ? null : (
        <Link
          className={styles.authorContainer}
          to={"/art/gallery?author=" + art.author.userName}
        >
          <div className={styles.avatarContainer}>
            <img
              className={styles.authorAvatar}
              src={art.author.avatar || defaultAvatar}
              alt={art.author.avatar || defaultAvatar}
            />
          </div>
          
          <li className={styles.authorName}>{art.author.userName}</li>
        </Link>
      )}
    </div>
  );
};

export default ArtSingle;
