import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css"; 
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faXmark, faGear, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let touching = false;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;

      if (isSidebarOpen && e.target.closest(`.${styles.sidebar}`)) {
        touching = true;
      } else if (!isSidebarOpen && startX < 100) {
        touching = true;
      } else {
        touching = false;
      }
    };

    const onTouchEnd = (e) => {
      if (!touching) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dx) < Math.abs(dy)) return;

      if (isSidebarOpen && dx < -50) {
        setIsSidebarOpen(false);
      } else if (!isSidebarOpen && dx > 50) {
        setIsSidebarOpen(true);
      }

      touching = false;
    };

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [isSidebarOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} size="lg"/>
        </button>
      </div>

      <div className={styles.search}>
        <input type="search" placeholder="Поиск..." />
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
      </div>

      <aside
        ref={sidebarRef}
        className={styles.sidebar}
        style={{ transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className={styles.SideBarTop}>
            <Logo/>
          <button className={styles.closeButton} onClick={() => setIsSidebarOpen(false)}>
            <FontAwesomeIcon icon={faXmark} size="2x"/>
          </button>
        </div>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">Профиль</a>
          <a href="#">Настройки</a>
          <a href="#">Помощь</a>
        </nav>
      </aside>
    </header>
  );
}

export default Header;
