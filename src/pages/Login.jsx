import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { useLoginMutation } from '../redux/sessionSlice';

const Login = () => {
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const changeHandler = (e) => {
    const property = e.target.name;
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const result = await loginMutation(formData);
    const error = result.error?.data.message;
    const user = result.data?.user.name;
    if (user) {
      localStorage.setItem('user', user);
      navigate('/');
    } else {
      localStorage.clear();
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    const validRegex = /^[a-zA-Z0-9\s]+$/;
    let lengthValid = false;
    let nameFormatValid = false;
    if (formData.name?.length > 0) lengthValid = true;
    if (formData.name?.match(validRegex)) nameFormatValid = true;

    if (lengthValid && nameFormatValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <section className={styles.onTopContainer}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <div className={styles.welcome}> </div>
        </div>
        <div className={styles.formArea}>
          <form onSubmit={sendForm}>
            <p>LOG IN</p>
            <input type="text" placeholder="User Name" name="name" onChange={changeHandler} />
            <p className={styles.error}>{errorMessage}</p>
            <button className={styles.submit} type="submit" disabled={!isFormValid}>LOGIN</button>
            <Link to="/register">Create account</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
