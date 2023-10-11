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
        <div className={styles.header}></div>
        <div className={styles.content}>{children}</div>
      </div>
      <button onClick={toggleMenu} className={styles.button}>
        {isOpen ? <span>X</span> : "Open SQLBar"}
      </button>
    </div>
  );
  
//   return (
//     <div className={styles.container}>
//       <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
//           <button onClick={() => toggleMenu()}
//           className={styles.button} >
//             {isOpen ? 
//             <span>X</span> : <img src="images/avatar.png" alr="contact open button" className={styles.openBtn}/>
//             }
//           </button>
//         <div className={styles.content}>{children}</div> //사이드바 컴포넌트 내부 값이 구현되는 위치
//       </div>
//     </div>
//   );
};

export default Sqlbar;