import React, { useState } from "react";
import styles from "./Sqlbar.module.css";

const Sqlbar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sqlbar} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.header}>SQLBar</div>
        <div className={styles.content}>{children}</div>
      </div>
      <button onClick={toggleMenu} className={styles.button}>
        {isOpen ? <span>X</span> : "Open SQLBar"}
      </button>
    </div>
  );
};

export default Sqlbar;