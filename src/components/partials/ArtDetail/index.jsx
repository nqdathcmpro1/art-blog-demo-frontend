import React, { useEffect, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleArt } from "../../../slices/artSlice";
import { currentArtSelector, pendingSelector } from "../../../selectors/artSelector";
import CircleLoading from "../CircleLoading";
import defaultAvatar from "../../../public/default_profile.png";
import useStyles from "./styles";

const ArtDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const styles = useStyles();

  const currentArt = useSelector(currentArtSelector);
  const pending = useSelector(pendingSelector);

  useEffect(() => {
    document.title = `${currentArt?.data?.title || "(untitled image)"} | ArtStudio`;
  }, [currentArt]);

  useEffect(() => {
    dispatch(fetchSingleArt(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {!pending ? (
        <div className={styles.content}>
          <div className={styles.artContainer}>
            <img src={currentArt?.data?.url} alt={currentArt?.data?.title} />
          </div>
          <div className={styles.detailContainer}>
            {currentArt?.data?.title ? (
              <li className={styles.title}>{currentArt?.data?.title}</li>
            ) : (
              <li className={styles.subTitle}>
                Image uploaded by <span>{currentArt?.data?.author.userName}</span>
              </li>
            )}
            <Link
              className={styles.author}
              to={"/art/gallery?author=" + currentArt?.data?.author.userName}
            >
              <div className={styles.authorAvatar}>
                <img
                  src={currentArt?.data?.author.avatar || defaultAvatar}
                  alt={currentArt?.data?.author.avatar || defaultAvatar}
                />
              </div>
              <li className={styles.authorName}>
                {currentArt?.data?.author.userName}
              </li>
            </Link>
          </div>
        </div>
      ) : (
        <CircleLoading />
      )}
    </div>
  );
};

export default memo(ArtDetail);
