import React from 'react';
import styles from './Estimates.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

function Estimates() {
 return (
<div className={styles.classCardLink} onClick={(e) => {if (e.target.closest('a') || e.target.closest('button')) {return;} window.location.href = '';} }>
    <div className={styles.Link}>
        <span>Последние оценки</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
    </div>
    <div data-no-sidebar-swipe="true" className={styles.EstimatesDiv}>
        <a href="">5</a>
        <a href="">3</a>
        <a href="">5</a>
        <a href="">2</a>
        <a href="">5</a>
        <a href="">4</a>
        <a href="">5</a>
    </div>
</div>
  );
}

export default Estimates;