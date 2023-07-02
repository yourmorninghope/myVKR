import React, { useContext } from 'react';
import {Box, Chip, Container, Typography} from '@mui/material';
import './sticker.css';
import { useLocation } from 'react-router-dom';
import { Context } from '../..';

const Sticker = (props) => {
  const location = useLocation().pathname;
  const {sellerStore} = useContext(Context);
  const {userStore} = useContext(Context);
  console.log(sellerStore.sellerCat)

  // console.log(sellerStore.username);

  return (
    <Box className='stickerContainer' sx={{backgroundColor: props.bgColor}}>
      {/* <Box className = 'decorative'></Box> */}
        {location === 'sellerAcc'?
        <Box className = 'stickerContent'>
            <Typography className='sticker-text'>{props.page}</Typography>
            <img className = 'sticker-image' alt = '' src = {props.img}></img>
        </Box>
        :
        <Box className = 'stickerContent stickerContent-seller'>
            
            <Box className = 'seller-image'>
              <img className = 'seller-image_cont' src = 'willowy-yellow-user-icon.png' alt = ''></img>
            </Box>
            <Box className = 'stickerContent_block'> 
              <p></p>
              <Typography className='seller-name'>{userStore.username}</Typography>
              
              <Box className = 'stickerContent-categories'>
                {sellerStore.sellerCat.map((category) => {
                  return <Chip className = 'seller-categories' label = {category}/>
                  // console.log(category)
                })}
                   
                  {/* <Chip className = 'seller-categories'/> */}
              </Box>
            </Box>
        </Box>
}
    </Box>
    
   )
}

export default Sticker