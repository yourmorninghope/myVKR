import React from 'react';
import Navbar from '../component/navBar';
import Footer from '../component/footerComponent';
import ImageList from '../component/ImageList';
import Sticker from '../component/sticker/sticker';

const color = 'linear-gradient(121deg, rgba(237,238,174,1) 0%, rgba(255,163,203,1) 44%, rgba(162,255,240,1) 100%)';

const catalogMain = () => {
  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <Sticker page = 'Каталог' img = 'cart2.png' bgColor = {color} />
      <ImageList />
      <Footer />
    </div>
  )
}

export default catalogMain