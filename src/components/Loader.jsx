import React from "react";
import styles from "../styles/loader.module.scss";

export default function Loader({ loaderRef }) {
  return (
    <div className={styles.loader_wrapper} ref={loaderRef}>
      <div className={styles.loader}>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
}
