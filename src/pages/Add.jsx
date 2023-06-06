/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateVehicleMutation } from '../redux/vehicleSlice';
import styles from '../styles/Add.module.css';
import noImage from '../assets/images/no_image_available.png';

const Add = () => {
  const navigate = useNavigate();
  const [createVehicleMutation] = useCreateVehicleMutation();
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    let valid = true;
    if (formData.model?.length === 0) valid = false;
    if (formData.model === undefined) valid = false;
    if (formData.brand?.length === 0) valid = false;
    if (formData.brand === undefined) valid = false;
    if (formData.price?.length === 0) valid = false;
    if (formData.price === undefined) valid = false;
    if (formData.year === undefined) valid = false;
    if (formData.color?.length === 0) valid = false;
    if (formData.color === undefined) valid = false;
    if (formData.accidents?.length === 0) valid = false;
    if (formData.accidents === undefined) valid = false;
    if (formData.registration_plate === null) valid = false;
    if (formData.registration_plate === undefined) valid = false;
    if (formData.picture?.length === 0) valid = false;
    if (formData.picture === undefined) valid = false;
    if (formData.description?.length === 0) valid = false;
    if (formData.description === undefined) valid = false;
    setIsValid(valid);
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await createVehicleMutation(formData);
      if (response.ok) {
        console.log('proceceed');
        navigate('/');
      } else {
        console.log('error in else');
        throw new Error('Failed to create');
      }
    } catch (error) {
      setError('Failed to create');
      console.log('error in catch');
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <section className={styles.container}>
      {error && <p>{error}</p>}
      <form className={styles.addForm} onSubmit={sendForm}>
        <input className={styles.formInput} type="text" name="model" placeholder="Model" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="brand" placeholder="Brand" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="price" placeholder="Price" onChange={changeHandler} />
        <input className={styles.formInput} type="date" name="year" placeholder="Year" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="color" placeholder="Color" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="accidents" placeholder="Accidents" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="registration_plate" placeholder="Plate" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="picture" placeholder="Image URL" onChange={changeHandler} />
        <img className={styles.photo} src={formData.picture || noImage} alt="upload model" />
        <textarea className={styles.formText} name="description" placeholder="Add description here..." onChange={changeHandler} />
        <button className={styles.submit} type="submit" disabled={!isValid}>Create</button>
      </form>
    </section>
  );
};

export default Add;
