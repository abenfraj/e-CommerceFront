import React from "react";
import {Container, Grid, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="80vh"
            >
                <Typography variant="h3" component="div" gutterBottom>
                    This page doesn't exist :(
                </Typography>
            </Grid>
        </Container>
    );
}

export default NotFound;