import React from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive';
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

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  let visibleSlides;
  if (isMobile) {
    visibleSlides = 1;
  } else if (isTablet) {
    visibleSlides = 2;
  } else if (isDesktop) {
    visibleSlides = 3;
  }

  return (
    <div className={styles.productSlider}>
      {cars && cars.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={85}
          naturalSlideHeight={95}
          totalSlides={cars.length}
          visibleSlides={visibleSlides}
        >
          <div className={styles.carouselContainer}>
            <ButtonBack className={styles.btnPrev}>Back</ButtonBack>
            <Slider>
              {cars.map((car) => (
                <Slide index={car.id - 1} key={car.id}>
                  <Link to={`/vehicle/${car.id}`}>
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
          </div>
        </CarouselProvider>
      ) : (
        <h2>{cars}</h2>
      )}
    </div>
  );
};

export default VehicleSlider;
