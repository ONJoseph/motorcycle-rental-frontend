import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetVehicleByIdQuery } from '../redux/vehicleSlice';
import styles from '../styles/Vehicle.module.css';
import DetailTable from '../components/DetailTable';

export default function Detail() {
  const user = localStorage.getItem('user');
  const { id } = useParams();
  const {
    data: vehicle,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetVehicleByIdQuery(id);
  let car;
  if (isLoading) {
    car = <p>Loading...</p>;
  } else if (isSuccess) {
    car = vehicle;
  } else if (isError) {
    car = <p>{error}</p>;
  }

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        {car && Object.keys(car).length > 0 ? (
          <>
            <div className={styles.photoArea}>
              <img className={styles.photo} src={car?.picture} alt="model" />
            </div>
            <div className={styles.infoArea}>
              <div className={styles.features}>
                <h1 className={styles.title}>{car?.model}</h1>
                <p className={styles.subtitle}>
                  {`- $${car?.price} cost per hour`}
                </p>
                <DetailTable data={car} />
              </div>
              {!user ? (
                <p>You need to be logged in to reserve a car</p>
              ) : null}
              {user ? (
                <Link to={`/reservation/${id}`}>
                  <button type="button" className={styles.reserveBtn}>Reserve</button>
                </Link>
              ) : null}
            </div>
          </>
        ) : (
          <h2>{car && car.error}</h2>
        )}
      </div>
    </section>
  );
}
