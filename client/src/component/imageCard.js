import React from 'react'
import {Box} from '@mui/material';
import './imageCard.css';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const ImageCard = () => {
  const location = useLocation();
  let image;
  let bg;

  if (location.pathname === LOGIN_ROUTE){
    image = 'Group 39474.png';
    bg = '#E2F4F3';
  } else{
    image = 'image.png';
    bg = '#EEE6FB';
  }

  return (
    <Box sx = {{backgroundColor: bg}} className = 'column column_right'>
      <div className='imageBox'>
        <img className='regImage' alt = ' ' src = {image}></img>
      </div>
    </Box>
  )
}

export default ImageCard