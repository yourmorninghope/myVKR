import React from 'react';
import Navbar from '../component/navBar';
import Footer from '../component/footerComponent';
import Sticker from '../component/sticker/sticker';
// import ItemCart from '../component/itemCart';
// import { Box } from '@mui/material';
import CartComponent from '../component/cartComponent';

const cart = () => {
  const color = 'linear-gradient(121deg, rgba(237,238,174,1) 0%, rgba(255,163,203,1) 44%, rgba(162,255,240,1) 100%)';
  return (
    <div>
      <Navbar />
      <Sticker page = 'Корзина' img = 'cart2.png' bgColor = {color} />
      <CartComponent/>
      <Footer />
    </div>
  )
}

export default cart