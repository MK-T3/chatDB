import React, { useState } from "react";
import styles from "./Sqlbar.module.css";
import {ChevronDownIcon} from "@heroicons/react/24/outline"
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
                <div className={styles.header}></div>
                <div className={styles.content}>{children}</div>
            </div>
            <button onClick={toggleMenu} className={styles.button}>
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform rotate-180 ${isOpen ? "rotate-0 " : ""}`}
                />
            </button>
        </div>
    );
   
};

export default Sqlbar;