import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  searchArtsSelector,
  pendingSelector,
} from "../../selectors/artSelector";
import { fetchArtsBySearch } from "../../slices/artSlice";
import useStyles from "./styles";

import ArtList from "../partials/ArtList";
import CircleLoading from "../partials/CircleLoading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const query = useQuery();

  const dispatch = useDispatch();

  const styles = useStyles();

  const searchArt = useSelector(searchArtsSelector);
  const pending = useSelector(pendingSelector);

  const searchText = query.get("search");

  const [arts, setArts] = useState([]);

  useEffect(() => {
    document.title = `Finding art(s) "${searchText}" | ArtStudio`;
  }, [searchText]);

  useEffect(() => {
    dispatch(fetchArtsBySearch(searchText));
  }, [dispatch, searchText]);

  useEffect(() => {
    setArts(searchArt.data);
  }, [searchArt]);

  return (
    <>
      {!pending ? (
        <div className={styles.container}>
          {searchText && (
            <p className={styles.searchResult}>
              {arts?.length} result{arts?.length > 1 ? "s" : ""} for "{searchText}
              "
            </p>
          )}
          {arts?.length > 0 ? (
            <ArtList artsList={arts} />
          ) : (
            <p>No artwork found</p>
          )}
        </div>
      ) : (
        <CircleLoading />
      )}
    </>
  );
};

export default memo(SearchPage);
