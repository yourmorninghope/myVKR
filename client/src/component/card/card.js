import React from 'react';
import {Box, Typography, Button, Modal} from '@mui/material'
import './card.css';
import { useLocation } from 'react-router-dom';

const Сard = (props) => {
  const location = useLocation();
 
  return (
    <Box className = 'itemCard'>
        <Box className = 'itemCard-block itemCard-block_1'>
            <img className = 'itemCard-block-image' alt = '' src = {props.img}></img>
        </Box>
        <Box className = 'itemCard-block itemCard-block_2'>
            <Typography className = 'itemCard-block-title'>{props.name}<br />{props.price}</Typography>
        </Box>
        {(location.pathname === 'sellerAcc')?
          <Box className = 'itemCard-block itemCard-block_3'>
              <Button>В корзину</Button>
          </Box>
        :
          <div></div>
        }
        
    </Box>
  )
}

export default Сard