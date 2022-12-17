import React, { useState, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { artsSelector, pendingSelector } from "../../selectors/artSelector";
import { fetchArts } from "../../slices/artSlice";
import ArtList from "../partials/ArtList";
import CircleLoading from "../partials/CircleLoading";
import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const location = useLocation();


  const getArtSelector = useSelector(artsSelector);

  const [page, setPage] = useState(1);
  const [artsList, setArtsList] = useState([]);

  useEffect(() => {
    document.title = "Home | ArtStudio";
  }, []);

  


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    dispatch(fetchArts(page), { signal })
    .then((data) => setArtsList(prev => [...prev, ...data.payload.data.data]))
    return () => controller.abort();
  }, [dispatch, page]);


  return (
    <div className={styles.container}>
      {artsList && (
        <ArtList
          artsList={artsList}
          setPage={setPage}
          page={page}
          numberOfPages={getArtSelector.numberOfPages}
        />
      )}
    </div>
  );
};

export default memo(Home);
