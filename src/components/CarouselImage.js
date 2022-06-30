import {Box, Paper} from "@mui/material";
import React from "react";

const CarouselImage = ({item}) => {
    return (
        <Paper sx={{
            backgroundColor: "white",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 700,
            width: 500
        }}>
            <Box
                component="img"
                sx={{
                    height: 700,
                    width: 500,
                }}
                alt="product-image"
                src={item}
            />
        </Paper>
    )
}

export default CarouselImage;