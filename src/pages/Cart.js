import React from "react";
import CheckoutList from "../components/CheckoutList";
import {Button, Container, Divider, Grid} from "@mui/material";
import ShippingForm from "../components/ShippingForm";
import {useEffect, useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cart")
            .then(res => res.json())
            .then(data => {
                    setCart(data);
                }
            );
    });

    return (
        <Container>
            {cart.length !== 0 &&<Grid container
                  spacing={2}>

                <Grid item xs={6}>
                    <ShippingForm cart={cart} sx={{height: "100%"}}/>
                </Grid>
                {/*<Divider orientation="vertical" flexItem />*/}
                <Grid item xs={6}>
                    <CheckoutList cart={cart} sx={{height: "100%"}}/>
                    <Button sx={{marginLeft: "100px", marginTop: "20px"}} variant="contained" endIcon={<DeleteIcon/>}
                    onClick={() => {
                        for(let i = 0; i < cart.length; i++) {
                            fetch("http://localhost:8080/cart/removeProductFromCart/" + cart[i].id, )
                                .then(res => res.json());
                        }

                    }}>
                        Remove all
                    </Button>
                </Grid>

            </Grid>}
            {cart.length === 0 && <h1>Your cart is empty</h1>}
        </Container>

    );
}

export default Cart;