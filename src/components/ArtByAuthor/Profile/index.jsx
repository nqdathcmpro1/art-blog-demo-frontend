import React, { useState, useEffect, useRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";

import { editUser, getAuthorUser } from "../../../slices/userSlice";
import { currentUserSelector } from "../../../selectors/userSelector";
import defaultAvatar from "../../../public/default_profile.png";

const Profile = ({ isOpen, setIsOpen, authorName, setAuthorInfo }) => {
  const initState = {
    fullName: "",
    email: "",
    status: "",
    avatar: "",
    banner: "",
  };

  const dispatch = useDispatch();

  const user = useSelector(currentUserSelector);

  const styles = useStyles();

  const [updateUser, setUpdateUser] = useState(initState);

  const containerRef = useRef();

  const formRef = useRef();

  useEffect(() => {
    document.title = "Profile setting | ArtStudio";
  }, []);

  useEffect(() => {
    setUpdateUser({
      ...updateUser,
      fullName: user?.fullName,
      email: user?.email,
      status: user?.status,
      avatar: user?.avatar,
    });
  }, [user]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.addEventListener("click", (e) => {
        if (
          e.path.includes(containerRef.current) &&
          !e.path.includes(formRef.current)
        )
          handleCancel();
      });
    }
    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [isOpen]);

  const convertBaseUrl = (url) => {
    const reader = new FileReader();
    if (url) reader.readAsDataURL(url);

    reader.onload = () => {
      setUpdateUser({ ...updateUser, avatar: reader.result });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editUser({ userId: user._id, userData: updateUser })).then(
      (data) => setAuthorInfo(data.payload.data)
    );
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const handleCancel = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className={styles.container} ref={containerRef}>
          <div className={styles.formContainer} ref={formRef}>
            <h1 className={styles.title}>Your profile</h1>
            <form
              id="profileForm"
              className={styles.profileForm}
              onSubmit={handleSubmit}
            >
              <div className={styles.inputForm}>
                <label htmlFor="fullName" className={styles.label}>
                  Full name:
                </label>
                <input
                  className={styles.textInput}
                  type="text"
                  id="fullName"
                  pattern="[^0-9]{0,30}"
                  maxLength="30"
                  value={updateUser.fullName || ""}
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputForm}>
                <label htmlFor="email" className={styles.label}>
                  Email:
                </label>
                <input
                  className={styles.textInput}
                  type="email"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  maxLength="50"
                  value={updateUser.email || ""}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputForm}>
                <label htmlFor="status" className={styles.label}>
                  Status:
                </label>
                <input
                  className={styles.textInput}
                  type="text"
                  id="status"
                  maxLength="30"
                  value={updateUser?.status || ""}
                  name="status"
                  onChange={handleChange}
                />
              </div>

              <div className={styles.imageForm}>
                <p className={styles.label}>Avatar: </p>
                <label htmlFor="avatar" className={styles.previewAvatar}>
                  <img
                    className={styles.image}
                    src={updateUser?.avatar || defaultAvatar}
                    alt={updateUser.avatar || defaultAvatar}
                  />
                </label>
                <input
                  type="file"
                  id="avatar"
                  accept="image/x-png,image/gif,image/jpeg"
                  className={styles.inputAvatar}
                  onChange={(e) => {
                    convertBaseUrl(e.target.files[0]);
                  }}
                />
              </div>
            </form>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                form="profileForm"
                className={styles.submitButton}
              >
                Send
              </button>
              <button className={styles.submitButton} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Profile);
