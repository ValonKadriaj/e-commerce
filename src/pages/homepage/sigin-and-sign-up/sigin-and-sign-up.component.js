import React from 'react';
import SignIn from '../../../components/sign-in/sign-in.component';
import './sigin-and-sign-up.style.scss';
import SignUp from '../../../components/sign-up/sign-up.component';

const SignInAndSignupPage = () => (
  <div className="sigin-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignupPage;
