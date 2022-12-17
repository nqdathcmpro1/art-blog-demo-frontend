import React, { useState, memo, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";
import { fetchArtsBySearch } from "../../../slices/artSlice";
import MiniSearchBar from "./MiniSearchBar";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [isUsingSearch, setIsUsingSearch] = useState(false);

  const styles = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    if (search !== "") {
      dispatch(fetchArtsBySearch(search));
      navigate(`/art/search?search=${search}`);
      setIsUsingSearch(false)
    }
    setSearch("");
  };

  const handleOpenSearch = () => {
    setIsUsingSearch(true);
  };

  return (
        <div className={styles.container}>
          <MiniSearchBar
            search={search}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isUsingSearch={isUsingSearch}
            setIsUsingSearch={setIsUsingSearch}
          />
          <div className={styles.openSearch} onClick={handleOpenSearch}>
            <SearchIcon className={styles.searchIcon} />
          </div>
          <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
              <input
                value={search}
                className={styles.searchBox}
                placeholder="Find your art here ..."
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <SearchIcon
                className={styles.searchIcon}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
  );
};

export default memo(SearchBox);
