import React from 'react';
import styles from './Home.module.css';
import UserCard from '../../components/home/UserCard/UserCard';
import ClassCard from '../../components/home/ClassCard/ClassCard';

function Home() {
 return (
    <div className={styles.container}>
    <UserCard/>
    <ClassCard/>
    </div>
  );
}

export default Home;