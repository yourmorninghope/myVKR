import React from 'react';
import { Box, Button } from '@mui/material';
import ItemCart from './itemCart';
import './cartComponent.css';

const cartComponent = () => {
  return (
    <Box className='cartContainer'>
        <Box className = 'cartColumn-left'> 
            <ItemCart />
        </Box>
        <Box className = 'cartColumn-right'> 
            <div> Сумма</div>
            <div> Скидка</div>
            <div>Итог</div>
            <Button>Оплатить</Button>
        </Box>
    </Box>
    
  )
}

export default cartComponent