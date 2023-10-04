"use client";
import React from "react";
import styles from "./Search.module.css";
import { searchAction } from "../actions/actions";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.form} action={searchAction}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search for a movie ..."
          name="searchTerm"
        />
      </form>
    </div>
  );
};

export default Search;
