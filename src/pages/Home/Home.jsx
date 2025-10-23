import React from 'react';
import styles from './Home.module.css';
import UserCard from '../../components/home/UserCard/UserCard';
import ClassCard from '../../components/home/ClassCard/ClassCard';
import Estimates from '../../components/home/EstimatesCard/Estimates';

function Home() {
 return (
    <div className={styles.container}>
    <UserCard/>
    <ClassCard/>
    <Estimates/>
    </div>
  );
}

export default Home;