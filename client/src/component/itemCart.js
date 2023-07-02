import { Box, Checkbox } from '@mui/material'
import React from 'react';
import './itemCart.css';

const itemCart = () => {
  return (
    <Box className = 'itemCart-container'>
        <Box className= 'itemCart-block itemCart-block_image'>
            <img className = 'itemCart-image' alt = '' src = 'catalog_1.png'></img>
        </Box>
        <Box className= 'itemCart-block itemCart-block_1'>
            <h3>Название товара</h3>
            <p> Размер, кол-во</p>
        </Box>
        <Box className= 'itemCart-block itemCart-block_2'>
            <p className='cartPrice'>Цена р</p>
        </Box>
        <Box className= 'itemCart-block'>
            <Checkbox></Checkbox>
        </Box>
    </Box>
  )
}

export default itemCart