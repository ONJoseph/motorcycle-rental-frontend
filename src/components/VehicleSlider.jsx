import React from 'react';
import { useGetVehiclesQuery } from '../redux/vehicleSlice';

const VehicleSlider = () => {
  const {
    data: vehicles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetVehiclesQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringfy(vehicles);
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <>
      {content}
    </>
  );
};

export default VehicleSlider;
