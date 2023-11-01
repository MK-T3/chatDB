const Sqlsidebar =()=>{
    return (
        <div className={styles.container}>
          <div ref={side}  className={styles.sidebar} style={{ width: `40px`, height: '100%',  transform: `translatex(40px)`}}>
              <button onClick={() => toggleMenu()}
              className="clss" >
                {isOpen ? 
                <span>X</span> : <img src="images/avatar.png" alr="contact open button" className={styles.openBtn}/>
                }
              </button>
          </div>
        </div>
      );
}