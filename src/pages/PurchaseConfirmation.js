import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Container, Grid, Typography} from "@mui/material";

const PurchaseConfirmation = () => {
    const {status} = useParams();

    useEffect(() => {
        document.title = "e-Commerce - Purchase " + status;
    })

    return (<Container>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="80vh"
            >
                <Grid item xs="auto">
                    <Typography variant="h3" color="purple" component="div" gutterBottom>
                        {status === "success"
                            ? "Thanks for ordering on our website!"
                            : "A problem occurred during your order :("}
                        <br/>
                    </Typography>
                </Grid>
                <Grid item xs="auto">
                    <Link to="/"><h1>Return to home page</h1></Link>
                </Grid>
            </Grid>
        </Container>);
}

export default PurchaseConfirmation;