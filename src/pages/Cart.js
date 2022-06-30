import React from "react";
import CheckoutList from "../components/CheckoutList";
import {Grid} from "@mui/material";
import ShippingForm from "../components/ShippingForm";

const Cart = () => {
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{height: ""}}>
            <Grid item xs={6} sx={{backgroundColor: "gray"}}>
                <ShippingForm sx={{height: "100%"}}/>
            </Grid>
            <Grid item xs={6} sx={{backgroundColor: "blue"}}>
                <CheckoutList sx={{height: "100%"}}/>
            </Grid>
        </Grid>

    );
}

export default Cart;