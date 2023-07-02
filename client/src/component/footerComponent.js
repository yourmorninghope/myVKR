import React from 'react';
import {Box, Container, Button} from '@mui/material';
import {MAIN_ROUTE, CATALOG_ROUTE} from '../utils/consts';
import { NavLink } from 'react-router-dom';
import './footerComponent.css';

const pages = [
    [MAIN_ROUTE, 'Главная'],
    [CATALOG_ROUTE, 'Каталог'],
    [MAIN_ROUTE, 'О нас'],
    [MAIN_ROUTE, 'Продавцам']
];

const Footer = () => {
  return (
    <footer className='footer'>
        <Box className = 'footer-block'>
            <Box className = 'footer-column footer-column_1'>Logo</Box>
            <Box className = 'footer-column footer-column_2'>
                {pages.map((page) => (
                    <NavLink to = {page[0]}>
                        <Button
                            key={page[1]}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {page[1]}
                        </Button>
                    </NavLink>))
                }
           </Box>
           <Box className = 'footer-column footer-column_3'></Box>   
        </Box>
        <Box className = 'footer-block'>тут типа год блабла</Box>
    </ footer>
  )
}

export default Footer