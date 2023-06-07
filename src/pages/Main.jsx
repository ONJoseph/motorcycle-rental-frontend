import React from 'react';
import VehicleSlider from '../components/VehicleSlider';
import styles from '../styles/Main.module.css';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <h1>Latest Models</h1>
      <h6>Please select a car model</h6>
    </div>
    <VehicleSlider />
  </div>
);

export default Main;
