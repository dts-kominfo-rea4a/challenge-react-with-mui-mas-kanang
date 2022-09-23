// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ i, data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <>
         <ListItem key={i} alignItems="center" divider={true}  > 
            <ListItemAvatar >
            <Avatar src={data.photo} alt={data.name} sx={{ width: 56, height: 56, marginRight: 3 }} />
            </ListItemAvatar>
         <div style={{ flexDirection:"column" }} > 
            <ListItemText primary={data.name}  />          
            <ListItemText secondary={data.phone}/>
            <ListItemText secondary={data.email}/>
        </div>
        </ListItem>
    </>
    );
};

export default Contact;
