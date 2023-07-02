import React, { useEffect } from 'react';
import {Box, FormControlLabel, MenuItem, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import {TextField, Checkbox} from '@mui/material';
import {Button} from '@mui/material'
import './registrationForm.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { useContext, useState } from 'react';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import './sellerReg.css';

const RegistrationForm = ({position}) => {
    const location = useLocation().pathname;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(false);

    const navigate = useNavigate();

    const {categoryStore} = useContext(Context);
    const {userStore} = useContext(Context);
    const {sellerStore} = useContext(Context);

    useEffect(()=> {
        if (location === '/for-sellers'){
            categoryStore.getCategories();
        }
    }, []);

    return (
        <Box className = {position}>
            <Box className = 'form-block_0'>
                <img alt = ''></img>
                тут лого картинорчка
            </Box>
            <Box className = 'form-block form-block_1'>
                РЕГИСТРАЦИЯ
            </Box>
                { (location === '/for-sellers')?
                    <Box className = 'form-block  form-block_seller'>
                        <Box className = "form-inputs">
                            <Typography className='form-title'>1. Ваш логин:</ Typography>
                            <TextField  onChange = {(e)=> setUsername(e.target.value)} value = {username} id="login" label="Логин" variant="outlined" margin = 'normal' type = 'text' className = 'login'/>
                            <Typography className='form-title form-title_2'>2. Добавьте краткое описание:</ Typography>
                            <TextField  onChange = {(e)=> setDescription(e.target.value)} value = {description} id = "description" label = "О себе..." type = "text" multiline minRows={3}/>
                            <Typography className='form-title form-title_3'>3. Выберите подходящие категории:</ Typography>
                        </Box>
                        <Box className = "form-inputs_2"> 
                            {categoryStore._categories.map((categoryItem)=>
                            <ToggleButtonGroup value = {category}  onChange={(e, newCategory)=>{setCategory(newCategory)}}>
                                <ToggleButton className = "categories-button" onChange = {(e)=>{e.target.classList.add('categories-button_active')}} value={categoryItem.name} onClick={(e)=>{sellerStore.setCategories(e.target.value)}}>{categoryItem.name}</ToggleButton>
                            </ToggleButtonGroup>

                            )}
                        </ Box>
                    </ Box>
                : 
                    <Box className = 'form-block form-block_2'>
                        <TextField onChange = {(e)=> setUsername(e.target.value)} value = {username} id="login" label="Логин" variant="outlined" margin = 'normal' type = 'text' className = 'login'/>
                        <TextField onChange = {(e)=> setEmail(e.target.value)} value = {email} id="email" label="E-mail" variant="outlined" margin = 'normal' type = 'email' className = 'password'/>
                        <TextField onChange = {(e)=> setPassword(e.target.value)} value = {password} id="password" label="Пароль" variant="outlined" margin = 'normal' type = 'password' className = 'password'/>
                        <TextField id="password" label="Повторите пароль" variant="outlined" margin = 'normal' type = 'password' className = 'password'/>
                    </ Box>
                 } 
        

            <Box className = 'form-block form-block_3'>
                {(location === '/for-sellers')?
                    <Button onClick = {()=> sellerStore.registration(username, description, sellerStore.categories, navigate)} variant="contained" className ='form-button registration-submit'>Зарегистрироваться</Button>
                 :
                    <Button onClick = {()=> userStore.registration(email, username, password, navigate)} variant="contained" className='form-button registration-submit'>Зарегистрироваться</Button>

                }
                {/* <Button onClick = {()=> userStore.registration(email, username, password, navigate)} variant="contained" className='form-button registration-submit'>Зарегистрироваться</Button> */}
                <p>Уже есть аккаунт? <NavLink to = {LOGIN_ROUTE}>Войти</NavLink></p>
            </ Box>
        </Box>

  )
}

export default observer(RegistrationForm);