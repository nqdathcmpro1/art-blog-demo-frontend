import React, { useState, useEffect, useRef, memo } from "react";
import { Masonry } from "@mui/lab";
import { Waypoint } from "react-waypoint";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { pendingSelector } from "../../../selectors/artSelector";
const ArtSingle = React.lazy(() => import("../ArtSingle"));
const CircleLoading = React.lazy(() => import("../CircleLoading"));

const ArtList = ({
  artsList,
  page,
  setPage,
  numberOfPages,
  isAuthorPage,
  handleDelete,
  handleEdit,
}) => {
  const styles = useStyles();

  const pending = useSelector(pendingSelector);

  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setHasMore(numberOfPages === page ? false : true);
  }, [page, numberOfPages]);

  return (
    <>
      <div className={styles.artsList}>
        <Masonry
          columns={{ xs: 2, sm: 3, md: 5 }}
          spacing={{ xs: 4, sm: 3, md: 2 }}
          sx={{ width: "auto" }}
        >
          {artsList.map((art, index) => (
            <div key={art._id} className={styles.list}>
              <ArtSingle
                art={art}
                isAuthorPage={isAuthorPage}
                handleDelete={handleDelete || null}
                handleEdit={handleEdit || null}
              />

              {index === artsList.length - 1 && hasMore && (
                <Waypoint
                  threshold={100}
                  onEnter={() => {
                    setPage((prev) => prev + 1);
                  }}
                />
              )}
            </div>
          ))}
        </Masonry>
      </div>
      {pending && <CircleLoading />}
    </>
  );
};

export default memo(ArtList);
