import * as React from 'react';
import {List, Divider, Grid} from '@mui/material';
import CheckoutListItem from "./CheckoutListItem";

const CheckoutList = ({cart}) => {

    return (
        <List sx={{width: '100%', maxWidth: 360, backgroundColor: 'background.paper'}}>
            {cart.map((product, index) =>
                <Grid key={index}>
                    <CheckoutListItem product={product}/>
                    <Divider variant="inset" component="li"/>
                </Grid>)}
        </List>
    );
}

export default CheckoutList;