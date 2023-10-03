import Link from "next/link";
import React from "react";
import styles from "./TopicBar.module.css";

const TopicBar = () => {
  return (
    <div className={styles.topicbar}>
      <Link className={styles.link} href="/upcoming">
        Up Coming
      </Link>
      <Link className={styles.link} href="/top-rated">
        Top Rated
      </Link>
    </div>
  );
};

export default TopicBar;
