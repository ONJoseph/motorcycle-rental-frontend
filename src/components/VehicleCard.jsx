import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import styles from '../styles/Main.module.css';

const VehicleCard = ({
  brand, picture, model, description,
}) => (
  <div className={styles.carCard}>
    <div className={styles.carImage}>
      <div className={styles.carBack}>
        <img className={styles.car} src={picture} alt={model} />
      </div>
    </div>
    <div className={styles.carDescription}>
      <h4>
        {brand}
        -
        (
        {model}
        )
      </h4>
      <h6>{description}</h6>
      <div className={styles.carSocial}>
        <FaFacebook />
        <FaTwitter />
        <FaTiktok />
      </div>
    </div>
  </div>
);

VehicleCard.propTypes = {
  brand: PropTypes.string,
  picture: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
};

VehicleCard.defaultProps = {
  brand: '',
  picture: '',
  model: '',
  description: '',
};

export default VehicleCard;
