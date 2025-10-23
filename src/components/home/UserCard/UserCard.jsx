import React, { useState } from "react";
import styles from "./UserCard.module.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
function UserCard() {
 return (
<a className={styles.UserCardLink} href="">
    <div className={styles.UserCard}>
        <div className={styles.profileLAN}> {/* Profile Login-Avatar-Name */}
        <FontAwesomeIcon className={styles.classCardLink} icon={faArrowUpRightFromSquare}/>
            <div className={styles.profileLANTop}>    
                <img className={styles.profileAvatar} src="images/avatar/avatar.jpg" alt="Аватар профиля" />
                <div className={styles.profileLN}> {/* Profile Login-Name */}
                    <h1>Евлампий Олег Николаевич</h1>
                    <p>@Revellison</p>    
                </div>
            </div>
            <div className={styles.profileInfoDiv}>
                <div className={styles.profileInfoDivWellGroup}>
                    <div><h1>ДТН-509-О</h1></div>
                    <div><h1>1 курс</h1></div>
                    <div><h1>ИСПО</h1></div>
                </div>
                <div className={styles.profileInfoSpecialityMore}>
                    <div className={styles.profileSpeciality}><h2>ИБ ТКС</h2></div>
                    <div className={styles.profileHeadman}><h2>Староста группы</h2></div>
                </div>
            </div>
        </div>
    </div>
</a>
  );
}

export default UserCard
