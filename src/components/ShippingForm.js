import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MuiPhoneNumber from "material-ui-phone-number";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useState} from "react";
import {Button} from "@mui/material";

const ShippingForm = ({cart}) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleOnPhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phoneNumber: phoneNumber,
                address: address
            })
        }).then(res => res.json())
            .then(res => {
                setIsPending(false);

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx" label="Name" value={name} variant="standard"
                               onChange={(e) => setName(e.target.value)}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <MuiPhoneNumber regions={'europe'} value={phoneNumber} defaultCountry={'fr'}
                                    onChange={handleOnPhoneNumberChange}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <LocationOnIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx" label="Address" value={address} variant="standard"
                               onChange={(e) => setAddress(e.target.value)}/>
                </Box>
            </Box>
            {!isPending && <Button variant="contained" type="submit" sx={{marginTop: "20px", marginLeft: "80px"}}>Submit</Button>}
            {isPending && <Button disabled variant="contained" type="submit">Submitting...</Button>}
        </form>
    );
}

export default ShippingForm;