import React from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import { useGetVehiclesQuery } from '../redux/vehicleSlice';
import 'pure-react-carousel/dist/react-carousel.es.css';
import VehicleCard from './VehicleCard';
import styles from '../styles/Main.module.css';

const VehicleSlider = () => {
  const {
    data: vehicles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetVehiclesQuery();

  let cars;
  if (isLoading) {
    cars = <p>Loading...</p>;
  } else if (isSuccess) {
    cars = vehicles;
  } else if (isError) {
    cars = <p>{error}</p>;
  }

  return (
    <div className={styles.productSlider}>
      {cars && cars.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={cars.length}
          visibleSlides
        >
          <ButtonBack className={styles.btnPrev}>Back</ButtonBack>
          <Slider>
            {cars.map((car) => (
              <Slide index={car.id - 1} key={car.id}>
                <Link to={`/cars/${car.id}`}>
                  <VehicleCard
                    brand={car.brand}
                    picture={car.picture}
                    model={car.model}
                    description={car.description}
                  />
                </Link>
              </Slide>
            ))}
          </Slider>
          <ButtonNext className={styles.btnNext}>Next</ButtonNext>
        </CarouselProvider>
      ) : (
        <h2>{cars}</h2>
      )}
    </div>
  );
};

export default VehicleSlider;
