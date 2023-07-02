import React from 'react';
import { useState } from 'react';
import {Button, Modal} from '@mui/material';
import AddItem from '../addItem/addItem';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './myModal.css';

const MyModal = (props) => {
   
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div className='myModal'>
        <Button  className = 'modal-button' onClick={handleOpen}><AddRoundedIcon className='modal-button-icon'></AddRoundedIcon></Button>
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddItem close = {handleClose} reload = {props.reload}></AddItem>
        </Modal>
      </div>
    );
  }


export default MyModal