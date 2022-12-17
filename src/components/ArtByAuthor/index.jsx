import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import Profile from "./Profile";
import {
  currentUserSelector,
  pendingSelector,
} from "../../selectors/userSelector";
import { fetchAuthorArts } from "../../slices/artSlice";
import { getAuthorUser } from "../../slices/userSlice";
import defaultAvatar from "../../public/default_profile.png";
import ArtList from "../partials/ArtList";
import CircleLoading from "../partials/CircleLoading";
import useStyles from "./styles";

const ArtByAuthor = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { search } = useLocation();
  const authorName = new URLSearchParams(search).get("author");

  const currentUser = useSelector(currentUserSelector);

  const pending = useSelector(pendingSelector);

  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const [authorInfo, setAuthorInfo] = useState({});

  const [authorArts, setAuthorArts] = useState([]);

  useEffect(() => {
    dispatch(getAuthorUser(authorName)).then((data) => setAuthorInfo(data.payload.data));
    dispatch(fetchAuthorArts(authorName)).then((data) => setAuthorArts(data.payload.data));
  }, [dispatch, authorName]); 

  useEffect(() => {
    document.title = `${authorInfo?.fullName} | ArtStudio`;
  }, [authorInfo]);

  return (
    <>
      {!pending ? (
        <>
          <div className={styles.container}>
            {currentUser?.userName === authorInfo.userName && (
              <button
                className={styles.editButton}
                onClick={() => setIsOpenProfile(true)}
              >
                <BorderColorIcon />
                <span className={styles.editBtnText}>Edit profile</span>
              </button>
            )}

            <ul className={styles.authorDetail}>
              <li>
                <img
                  className={styles.authorAvatar}
                  src={authorInfo?.avatar || defaultAvatar}
                  alt={authorInfo?.avatar || "avatar"}
                />
              </li>
              <li className={styles.authorName}>{authorInfo?.fullName}</li>
              <li className={styles.authorUserName}>
                {authorInfo && `@${authorInfo.userName}`}
              </li>
              <li className={styles.authorStatus}>
                {authorInfo?.status || "(No status has been uploaded)"}
              </li>
            </ul>

            <div className={styles.artContainer}>
              {authorArts?.length > 0 && (
                <ArtList pending={pending} artsList={authorArts} isAuthorPage={true} />
              )}
            </div>
          </div>

          <Profile isOpen={isOpenProfile} authorName={authorName} setAuthorInfo={setAuthorInfo} setIsOpen={setIsOpenProfile} />
        </>
      ) : (
        <CircleLoading />
      )}
    </>
  );
};

export default ArtByAuthor;
