import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";

const MiniSearchBar = ({
  search,
  handleChange,
  handleSubmit,
  isUsingSearch,
  setIsUsingSearch,
}) => {
  const styles = useStyles();

  const handleCloseSearch = () => {
    setIsUsingSearch(false);
  };

  return (
    <>
      {isUsingSearch && (
        <div className={styles.container}>
          <div
            className={styles.arrowBackContainer}
            onClick={handleCloseSearch}
          >
            <ArrowBackIcon className={styles.arrowBack} />
          </div>
          <div className={styles.searchBar}>
            <input
              value={search}
              className={styles.searchBox}
              placeholder="Find your art here ..."
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <SearchIcon className={styles.searchIcon} onClick={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default MiniSearchBar;
