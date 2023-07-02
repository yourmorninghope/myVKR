import React, { useEffect } from 'react';
import {Box} from '@mui/material';
import './items.css'
import Card from '../card/card';
import { Context } from '../..';
import { useContext } from 'react';

const Items = () => {
  const {sellerStore} = useContext(Context);
  // console.log(sellerStore.items);
  if (!sellerStore.items.length === 0){
    return <div>Добавьте товары</div>
  }

  return (
    <Box className = 'items-container'> 
      {sellerStore.items.map((it)=>{
          return <Card name = {it.name} price = {it.price} img = {it.image}></Card>
      })}
      
    </Box>
  )
}

export default Items