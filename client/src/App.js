import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { useState } from 'react';

import Container from '@mui/material/Container';
import './index.css';
import { Context } from '.';
import {observer} from 'mobx-react-lite';

const App = () => {
  const {userStore} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      if (localStorage.getItem('token')){
        userStore.checkAuth().then(() => userStore.setAuth(true)).finally(()=>setLoading(false))
      }
  }, [])

  if(loading){
    return <div>загрузка</div>
  }

  return (
    <Container className = 'appRoot-container' style={{margin: 0, boxSizing:"border-box", width : "100vw", padding: 0}}>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter> 
    </Container>
  );
}

export default observer(App);
