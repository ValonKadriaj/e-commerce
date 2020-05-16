import React, { useState } from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (e) {
      alert(e.message);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignin>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
