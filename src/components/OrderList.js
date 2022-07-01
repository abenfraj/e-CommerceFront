import * as React from 'react';
import {List, Divider, Grid} from '@mui/material';
import OrderListItem from "./OrderListItem";

const OrderList = ({orders}) => {

    return (
        <List sx={{width: '100%', maxWidth: 700, backgroundColor: 'background.paper'}}>
            {orders.map((order, index) =>
                <Grid key={index}>
                    <OrderListItem orders={order}/>
                    <Divider variant="inset" component="li"/>
                </Grid>)}
        </List>
    );
}

export default OrderList;