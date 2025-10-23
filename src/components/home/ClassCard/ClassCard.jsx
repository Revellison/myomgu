import React from 'react';
import styles from './ClassCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPodcast, faSquareRootVariable, faArrowUpRightFromSquare, faDoorOpen} from '@fortawesome/free-solid-svg-icons';

function ClassCard() {
 return (
<a className={styles.classCardLink} href="">
    <div className={styles.classCard}>
      <div className={styles.classCardItemInfo}>
        <div className={styles.classCardIcon}>
          <FontAwesomeIcon icon={faSquareRootVariable} />
        </div>
        <div className={styles.classCardItemName}>
          <h1 className={styles.classCardItem}>Математика</h1>
          <span className={styles.classCardView}><FontAwesomeIcon icon={faPodcast}/> лекция</span>
          <span className={styles.classCardView}><FontAwesomeIcon icon={faDoorOpen}/> 209</span>
        </div>
      </div>
      <FontAwesomeIcon className={styles.classCardLinkIco} icon={faArrowUpRightFromSquare}/>
      <h1 className={styles.classCardTime}>Начало в 12:45</h1>
    </div>
</a>
  );
}

export default ClassCard;