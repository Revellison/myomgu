import React, { useState } from "react";
import styles from "./Header.module.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header>
        <div className={styles.icon}><img src="favicon/icon-svg.svg" alt="icon"/></div>
        <div className={styles.search}>
            <input type="search" placeholder="Поиск..." />
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
        </div>
    </header>
  );
}

export default Header
