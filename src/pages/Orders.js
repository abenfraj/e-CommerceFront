import React, {useEffect} from "react";
import {Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import OrderList from "../components/OrderList";

const Orders = () => {
    const [orders, setOrders] = React.useState([]);

    useEffect(() => {
        document.title = "e-Commerce - Orders";
        fetch('http://localhost:8080/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [orders]);

    return (
        <Container>
            {orders.length !== 0 &&
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      minHeight="30vh">
                    <Grid item xs={6}>
                        <OrderList orders={orders} sx={{height: "100%"}}/>
                    </Grid>
                </Grid>}
            {orders.length === 0 &&
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="80vh"
                >
                    <Grid item xs="auto">
                        <Typography variant="h3" component="div" gutterBottom>
                            You have no orders pending !
                        </Typography>
                    </Grid>
                    <Grid item xs="auto">
                        <Link to="/"><h1>Return to home page</h1></Link>
                    </Grid>

                </Grid>}
        </Container>
    );
}

export default Orders;