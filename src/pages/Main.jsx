import React from 'react';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.carLatest}>
      <h1>Latest Models</h1>
      <h6>Please select a car model</h6>
    </div>
    <ProductSlider />
    <Footer />
  </div>
);

export default Main;