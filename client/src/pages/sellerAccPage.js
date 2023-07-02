import React, { useState } from 'react';
import Navbar from '../component/navBar';
import Sticker from '../component/sticker/sticker';
import {Tabs, Tab, Box} from '@mui/material';
import Items from '../component/items/items';
import MyModal from '../component/modal/myModal';
// import './sellerAcc.css';
import { useEffect, useContext } from 'react';
import { Context } from '..';


const SellerAccPage = () => {

    const [value, setValue] = useState(1);
    const {sellerStore} = useContext(Context);
    const {userStore} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(()=>{
        sellerStore.getItems(userStore.id).finally(()=>setLoading(false))
    }, [])

  if(loading){
    return <div>загрузка</div>
  }

  return (
    <div >
        <Navbar></Navbar>
        <Sticker bgColor = "#efd3f6"></Sticker>
        <Box><p className='seller-description'>{sellerStore.description}</p></Box>
        <Tabs value = {value} onChange={(e, value)=> setValue(value)} centered>
            <Tab className = 'sellerTabs' onClick = { (value) ? (e)=>e.target.classList.Add('sellerTabs_active'): ''} label="Настройки" />
            <Tab label="Товары" />
        </Tabs>
        {value===1 ?
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <MyModal reload = {setReload}/>
              <Items reload = {reload}></Items>
          </div>
            :
            <div>Настройки</div>
        }
    </div>
  )
}

export default SellerAccPage