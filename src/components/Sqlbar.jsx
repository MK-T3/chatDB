import React, { useState } from "react";
import styles from "./Sqlbar.module.css";
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import Editor from '@monaco-editor/react'

// const Sqlbar = ({ children }) => {
	// return <Editor height='80%' />
// };

const Sqlbar = (props) => {
    const [isOpen, setOpen] = useState(false);
    const {responseValue} = props;
    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    return (
        <div className={styles.container}>
            <div
                className={`${styles.sqlbar} ${isOpen ? styles.open : ""}`}
            >
                <div className={styles.header}></div>
                <div className={styles.content}></div>
	            <Editor height='90%'
                        width={isOpen ? '100%' : '0%'}
                        language="sql"
                        defaultValue="SELECT * FROM Students;"
                        value={responseValue}
                        options={{
                            fontSize: 12,
                            minimap: {enabled : false},
                            scrollbar: {
                                vertical: 'auto',
                                horizontal: 'auto'
                            }                            
                        }}

                        />
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