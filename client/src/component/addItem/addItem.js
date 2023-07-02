import React from 'react';
import {Box, Button, Input, InputLabel, ListItem, MenuItem, TextField, Typography} from '@mui/material';
import { useState, useContext, useEffect, useRef } from 'react';
import { Context } from '../..';
import './addItem.css';

const AddItem = (props) => {
    const filePicker = useRef(null);
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({
        image: 'image-logo_1.png',
        name: '',
        price: 0,
        category: '',
        itemType: '',
        material: '',
        color: '',
        description: ''
    });

    const {categoryStore} = useContext(Context);
    const {userStore} = useContext(Context);
    const {itemStore} = useContext(Context);
    const {sellerStore} = useContext(Context);


    useEffect(()=> {
        categoryStore.getCategories().finally(()=>setLoading(false))
    }, []);

    if (loading){
        return <div>загрузка</div>
    }

    function handleUpload(e) {
        const file = e.target.files[0]; 
        const reader = new FileReader();

        reader.onload = ()=>{
            setItem({
                ...item,
                image: reader.result});
        }

        reader.readAsDataURL(file);
    }

    const handlePick = ()=>{
        filePicker.current.click();
    }

    const handleCategory = (e)=>{
        setItem({...item, category: e.target.value});
        categoryStore.getCharacteristics(e.target.value);
    }

    return (
        <Box className = 'addItem-container'>
            <Box className = 'addItem-block'>
                <Box className = 'addItem-column addItem-column_1'>
                    <Box className = 'addItem-column-image'>
                        <input className = 'addItem-column-input' ref = {filePicker} type = "file" onChange={(e)=>handleUpload(e)} /><img onClick = {handlePick} className = 'addItem-image' src = {item.image} alt = ""></img>
                    </Box>
                    <Typography className='addItem-listItem-title addItem-listItem-title_2'> Описание</Typography>
                    <TextField className = 'addItem-description' value = {item.description} onChange = {(e)=>setItem({...item, description: e.target.value})} multiline minRows={3} maxRows={5} fullWidth required></TextField>
                </Box>
                <Box className = 'addItem-column addItem-column_2'>
                    <Box className = 'addItem-column-content'>
                        <ListItem className='addItem-listItem'>
                            <Typography className='addItem-listItem-title'> Название </ Typography>
                            <Input className='addItem-listItem-input' value = {item.name} onChange = {(e)=>setItem({...item, name: e.target.value})}required  />
                        </ListItem>  
                        <ListItem className='addItem-listItem'>
                            <Typography className='addItem-listItem-title'> Цена </ Typography>
                            <Input className='addItem-listItem-input' value = {item.price} onChange = {(e)=>setItem({...item, price: e.target.value})}required />
                        </ListItem>
                        <ListItem className='addItem-listItem'>
                            <Typography className='addItem-listItem-title'> Категория </ Typography>
                            <TextField select variant = 'standard' className = 'addItem-listItem-select' label = 'Выберите категорию' required value = {item.category} onChange = {(e)=>handleCategory(e)}>
                                {categoryStore._categories.map((categoryItem) => 
                                    <MenuItem value = {categoryItem.name}> {categoryItem.name}</MenuItem>
                                )}
                            </ TextField>
                        </ListItem>  
                        <ListItem className='addItem-listItem addItem-listItem-characteristics'>
                            <Typography className='addItem-listItem-title addItem-listItem-title_2'> Характеристики </ Typography>
                            <Box className = 'addItem-characteristics'> 
                                <ListItem className='addItem-listItem-type'>
                                    <Typography>Тип</Typography>
                                    <TextField select variant = 'standard' className = 'addItem-listItem-select_char' label = 'Выберите тип' required value = {item.itemType} onChange = {(e)=>setItem({...item, itemType:e.target.value})}>
                                        {categoryStore._categoryTypes.map((categoryType) => 
                                            <MenuItem value = {categoryType}> {categoryType}</MenuItem>
                                        )}
                                    </ TextField>
                                </ListItem>
                                <ListItem className='addItem-listItem-type'>
                                    <Typography>Материал</Typography>
                                    <TextField select variant = 'standard' className = 'addItem-listItem-select_char' label = 'Выберите материал' required value = {item.material} onChange = {(e)=>setItem({...item, material:e.target.value})}>
                                        {categoryStore._categoryMaterials.map((categoryMaterial) => 
                                            <MenuItem value = {categoryMaterial}> {categoryMaterial}</MenuItem>
                                        )}
                                    </ TextField>
                                </ListItem>
                                <ListItem className='addItem-listItem-type'>
                                    <Typography>Цвет</Typography>
                                    <TextField select variant = 'standard' className = 'addItem-listItem-select_char' label = 'Выберите цвет' required value = {item.color} onChange = {(e)=>setItem({...item, color:e.target.value})}>
                                        {categoryStore._categoryColors.map((categoryColor) => 
                                            <MenuItem value = {categoryColor}> {categoryColor}</MenuItem>
                                        )}
                                    </ TextField>
                                </ListItem> 
                            </Box>  
                        </ListItem>
                    </Box>
                </Box>
            </Box>
            <Box className = 'addItem-block'>
                <Button  onClick = {() => {itemStore.saveItem(item, userStore.id); props.reload(true); props.close()}} variant="contained" className='form-button addItem-form-button'>Сохранить товар</Button>
            </Box>
        </Box>
    )
}

export default AddItem