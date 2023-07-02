import React, { useContext, useState } from 'react';
import {Box} from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material'
import './registrationForm.css';
import './loginForm.css';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {userStore} = useContext(Context);
    const history = useNavigate();

    return (
        <Box className = 'column column_left'>
            <Box className = 'form-block_0 form-block_login'>
                <img alt = ''></img>
                лого 
            </Box>
            <Box className = 'form-block form-block_1'>
                ВХОД
            </Box>
            <Box className = 'form-block form-block_2'>
                <TextField onChange = {e => setUsername(e.target.value)} value = {username} id="login" label="Логин" margin = 'normal' variant="outlined" type = 'text' className = 'login'/>
                <TextField onChange = {e => setPassword(e.target.value)} value = {password} id="password" label="Пароль" margin = 'normal' variant="outlined" type = 'password' className = 'password'/>
            </ Box>
            <Box className = 'form-block form-block_3'>
                <Button onClick = {() => userStore.login(username, password, history)} variant="contained" className='form-button registration-submit'>Войти</Button>
                <p>Нет аккаунта? <NavLink to ={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></p>
            </ Box>
        </Box>
    )
}

export default observer(LoginForm);