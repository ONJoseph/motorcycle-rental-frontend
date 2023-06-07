import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/DetailTable.module.css';

const DetailTable = ({ data }) => (
  <table className={styles.detailTable}>
    <tbody>
      <tr>
        <td className={styles.keyRow}>Brand</td>
        <td className={styles.valueRow}>{data?.brand}</td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Year</td>
        <td className={styles.valueRow}>{data?.year}</td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Color</td>
        <td className={styles.valueRow}>{data?.color}</td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Plate</td>
        <td className={styles.valueRow}>{data?.registration_plate}</td>
      </tr>
    </tbody>
  </table>
);

DetailTable.propTypes = {
  data: PropTypes.shape(
    {
      brand: PropTypes.string,
      year: PropTypes.string,
      color: PropTypes.string,
      registration_plate: PropTypes.string,
    },
  ),
};

DetailTable.defaultProps = {
  data: {
    brand: 'Loding...',
    year: 'Loding...',
    color: 'Loding...',
    registration_plate: 'Loding...',
  },
};
export default DetailTable;
