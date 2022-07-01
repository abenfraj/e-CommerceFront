import React from "react";
import CheckoutList from "../components/CheckoutList";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import ShippingForm from "../components/ShippingForm";
import {useEffect, useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        document.title = "e-Commerce - Cart";
        fetch("http://localhost:8080/cart")
            .then(res => res.json())
            .then(data => {
                    setCart(data);
                }
            );
    });

    return (
        <Container>
            {cart.length !== 0 && <Grid container
                                        spacing={2}>

                <Grid item xs={6}>
                    <ShippingForm cart={cart} sx={{height: "100%"}}/>
                </Grid>
                <Grid item xs={6}>
                    <CheckoutList cart={cart} sx={{height: "100%"}}/>
                    <Button sx={{marginLeft: "100px", marginTop: "20px"}} variant="contained" endIcon={<DeleteIcon/>}
                            onClick={() => {
                                for (let i = 0; i < cart.length; i++) {
                                    fetch("http://localhost:8080/cart/removeProductFromCart/" + cart[i].id,)
                                        .then(res => res.json());
                                }

                            }}>
                        Remove all
                    </Button>
                </Grid>

            </Grid>}
            {cart.length === 0 &&
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="80vh"
                >
                    <Grid item xs="auto">
                        <Typography variant="h3" component="div" gutterBottom>
                            Your cart is empty !
                        </Typography>
                    </Grid>
                    <Grid item xs="auto">
                        <Link to="/"><h1>Return to home page</h1></Link>
                    </Grid>

                </Grid>}
        </Container>

    );
}

export default Cart;