import React from "react";

import useStyles from "./styles";

const Dropdown = ({ art, handleEdit, handleDelete }) => {
  const styles = useStyles();

  return (
    <div className={styles.container} >
      <div
        className={styles.button}
        onClick={() => handleDelete(art) || null}
      >
        Delete
      </div>
      <div
        className={styles.button}
        onClick={() => handleEdit(art._id) || null}
      >
        Edit
      </div>
    </div>
  );
};

export default Dropdown;
