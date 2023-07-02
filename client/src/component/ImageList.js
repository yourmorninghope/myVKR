import { Box } from '@mui/material'
import React from 'react';
import './imageList.css';
import { NavLink } from 'react-router-dom';
import { CATALOG_ROUTE } from '../utils/consts';

const categories = ['Уют и дом', 'Одежда', 'Канцелярия', 'Украшения и аксессуары', 'Приятные мелочи', 'Игрушки', 'что-то еще']

const ImageList = () => {
  return (
    <Box className='imageContainer'>
        <Box className = 'gridWrapper'> 
            {categories.map((category) => 
                <NavLink className={'gridElem gridElem_' + (categories.indexOf(category)+1)} to = {CATALOG_ROUTE}> 
                    <img className = {'gridElem-image gridElem-image_' + (categories.indexOf(category)+1)} alt = '' src = {'catalog_' + (categories.indexOf(category)+1) + '.png'}></img>
                    <div className = {'gridElem-content gridElem-content_' + (categories.indexOf(category)+1)}>{category}</div>
                </NavLink>
            )}
           
        </Box>
    </Box>
  )
}

export default ImageList