import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './navBar.css';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import {MAIN_ROUTE, CATALOG_ROUTE, CART_ROUTE, LOGIN_ROUTE, SELLER_REG_ROUTE} from '../utils/consts'; 

const pagesLeft = [[MAIN_ROUTE, 'Главная'], [CATALOG_ROUTE, 'Каталог'], [MAIN_ROUTE, 'О нас']];

const pagesRight = [[SELLER_REG_ROUTE, 'Продавцам'], [LOGIN_ROUTE, 'Вход'], [CART_ROUTE, 'Корзина']];

function ResponsiveAppBar() {
    return (
        <AppBar position="static">
            <Container sx={{ display: 'flex'}} maxWidth="xl">
                <Box sx={{width: '20vw', flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around' }}>
                    {pagesLeft.map((page) => (
                        <NavLink to = {page[0]}>
                            <Button
                                key={page[1]}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                            {page[1]}
                            </Button>
                        </NavLink>
                    
                    ))}
                </Box>
                <Box sx={{width: '30vw', color: 'black', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Typography>Logo</Typography></Box>
                <Box sx={{width: '20vw', flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around'}}>
                    {pagesRight.map((page) => (
                        <NavLink to = {page[0]}>
                            <Button
                                key={page[1]}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page[1]}
                            </Button>
                        </NavLink>
                        
                        ))}
                </Box>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;