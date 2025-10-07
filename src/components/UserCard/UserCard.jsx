import React, { useState } from "react";
import styles from "./UserCard.module.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
function UserCard() {
 return (
    <div className={styles.UserCard}>
        <div className={styles.profileLAN}> {/* Profile Login-Avatar-Name */}
            <img className={styles.profileAvatar} src="images/avatar/avatar.jpg" alt="Аватар профиля" />
            <div className={styles.profileLN}> {/* Profile Login-Name */}
                <h1>Revellison</h1>
                <p>Евлампий Олег Николаевич</p>    
            </div>
        </div>
        <div className={styles.profileInfo}>
            <div className={styles.profileInfoDiv}>
                <div className={styles.profileGroup}><span>Группа</span><h1 className={styles.GroupInfo}>ДТН-509-О</h1></div>
                <div className={styles.profileWell}><span>Курс</span><h1 className={styles.WellInfo}>1 курс</h1></div>
            </div>
            <div className={styles.profileSpeciality}><span>Обеспечение информационной безопасности телекоммуникационных систем</span></div>
        </div>
        <div className={styles.MoreInfoButton}>
            {/*<button>больше информации</button>*/}
        </div>
    </div>
  );
}

export default UserCard
