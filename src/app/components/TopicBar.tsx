"use client";
import Link from "next/link";
import React from "react";
import styles from "./TopicBar.module.css";
import { usePathname } from "next/navigation";

const TopicBar = () => {
  const pathName = usePathname();
  return (
    <div className={styles.topicbar}>
      <Link
        className={`${styles.link} ${pathName === "/upcoming" ? styles.active : ""
          }`}
        href="/upcoming"
      >
        Up Coming
      </Link>
      <Link
        className={`${styles.link} ${pathName === "/top-rated" ? styles.active : ""
          }`}
        href="/top-rated"
      >
        Top Rated
      </Link>
    </div>
  );
};

export default TopicBar;
