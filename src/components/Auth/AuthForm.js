import { useState } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Logon' : 'Sign Up'}</h1>
    </section>
  );
};

export default AuthForm;
