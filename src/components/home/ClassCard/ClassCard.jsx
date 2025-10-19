import React from 'react';
import styles from './ClassCard.module.css';

// Иконка для предмета (заглушка)
const SubjectIcon = ({ icon }) => {
  return (
    <div className={styles.iconWrapper}>
      {/* Имитируем иконку корня из твоего скриншота */}
      <span className={styles.iconContent}>{icon || '√x'}</span>
    </div>
  );
};

// Иконка для ссылки (заглушка) - та самая стрелка в углу
const ExternalLinkIcon = () => (
  <svg 
    className={styles.externalLinkIcon} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M15 4L20 4L20 9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 12L20 4" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ClassCard = ({ classData }) => {

  return (
    <h1>ky</h1>
  );
};

export default ClassCard;