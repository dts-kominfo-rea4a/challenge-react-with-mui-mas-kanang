// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, TextField } from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";

const ContactForm = ({fnAdd}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhoto, setInputPhoto] = useState("");

        
    const formOnSubmitHandler = (event) => {
        const newData = {
            "name": inputName,
                "phone": inputPhone,
                "email": inputEmail,
                "photo": inputPhoto,
            };
        // console.log(newData);
        event.preventDefault();
        // Panggil props fnAddTodos
        fnAdd(newData);
        // Kosongkan lagi input
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputPhoto("");
      };


    return (
        <>
        <Card sx={{ width: 400, marginLeft:"20%"}}>
            <form onSubmit={formOnSubmitHandler} >
            <CardContent  sx={{ display:"flex", flexDirection:"column", padding:2}}>
                <TextField id="filled_basic" label="Name" variant="filled" value={inputName} onChange={(event)=> setInputName(event.target.value)}/>
                <TextField id="filled_basic" label="Phone" variant="filled" value={inputPhone} onChange={(event)=> setInputPhone(event.target.value)}/>
                <TextField id="filled_basic" label="Email" variant="filled"  value={inputEmail} onChange={(event)=> setInputEmail(event.target.value)}/>
                <TextField id="filled_basic" label="Photo URL" variant="filled" value={inputPhoto} onChange={(event)=> setInputPhoto(event.target.value)}/>
                <Button type="submit" variant="contained">
                    Simpan
                </Button>
            </CardContent>
            </form>
        </Card>
        </>
    );
}

export default ContactForm;