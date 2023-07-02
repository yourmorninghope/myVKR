import React from 'react';


import '../component/authPage.css';
import RegistrationForm from '../component/registrationForm';
import LoginForm from '../component/loginForm';
import ImageCard from '../component/imageCard';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {Box} from '@mui/material'

const Auth = () => {
  const location = useLocation();

  if (location.pathname === LOGIN_ROUTE){
    return (
      <Box class = 'container'>
        <ImageCard />
        <LoginForm />
      </Box>
    )
  }

  return (
    <Box class = 'container'>
      <RegistrationForm  position={"column column-left"}/>
      <ImageCard />
    </Box>
  )
}

export default Auth
