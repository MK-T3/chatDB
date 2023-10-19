import React, { useState } from "react";
import styles from "./Sqlbar.module.css";
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import Editor from '@monaco-editor/react'

// const Sqlbar = ({ children }) => {
	// return <Editor height='80%' />
// };

const Sqlbar = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    const sqlQuery = `
    CREATE TABLE Students (
        StudentID INT PRIMARY KEY,\n
        FirstName VARCHAR(50),\n
        LastName VARCHAR(50),\n
        Age INT,\n
        GPA DECIMAL(3, 2)\n
    );\n
    \n
    INSERT INTO Students (StudentID, FirstName, LastName, Age, GPA)\n
    VALUES (1, 'John', 'Doe', 20, 3.75);\n\n
  
    SELECT * FROM Students;\n
  `;
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
                        defaultValue=
"CREATE TABLE Students (
    StudentID INT PRIMARY KEY
    FirstName VARCHAR(50)
    LastName VARCHAR(50)
    Age INT
    GPA DECIMAL(3, 2)
);
INSERT INTO Students (StudentID, FirstName, LastName, Age, GPA)
VALUES (1, 'John', 'Doe', 20, 3.75);

SELECT * FROM Students;" 
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