import { useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = ({ inputValue }) => {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Filter dishes..." type="text" onChange={inputValue} />
    </div>
  );
};

export default SearchField;
