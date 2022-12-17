import React, { useState, memo } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import useStyles from "./styles";

const Input = ({
  label,
  isPasswordInput,
  value,
  name,
  onChange,
  errorMessage,
}) => {
  const [isPassword, setIsPassword] = useState(isPasswordInput);

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          autoComplete="off"
          className={styles.input}
          placeholder={label}
          value={value}
          name={name}
          onChange={onChange}
          type={isPassword ? "password" : "text"}
        />
        {isPasswordInput && (
          <VisibilityIcon
            className={styles.passwordButton}
            onClick={() => setIsPassword(!isPassword)}
          />
        )}
      </div>
      <div className={styles.errorContainer}>
        {errorMessage && <h5 className={styles.error}>{errorMessage}</h5>}
      </div>
    </div>
  );
};

export default memo(Input);
