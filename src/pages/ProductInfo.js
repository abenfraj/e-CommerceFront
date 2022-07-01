import React from "react";
import {useParams} from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {useEffect, useState} from "react";
import {
    Container,
    Grid,
    ThemeProvider,
    Typography,
    createTheme,
    responsiveFontSizes,
    Button,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import QuantityInput from "../components/QuantityInput";
import CarouselImage from "../components/CarouselImage";
import ProductCustomization from "../components/ProductCustomization";

const ProductInfo = () => {
    const [product, setProduct] = useState({images: []});
    const [quantity, setQuantity] = useState(0);
    let {productId} = useParams();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    useEffect(() => {

        fetch("http://localhost:8080/product/by-id/" + productId)
            .then(res => res.json())
            .then(data => {
                    setProduct(data);
                }
            );
        document.title = "e-Commerce - " + product.name;
    }, [productId]);

    return (
        <div>
            <Container sx={{marginTop: "100px", backgroundColor: "white"}}>
                <Grid container direction="row" justify="space-evenly">
                    <Grid item xs="auto">
                        <Carousel
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 500
                            }}
                            navButtonsAlwaysVisible={true}>
                            {product.images.map((item, i) => <CarouselImage key={i} item={item}/>)}
                        </Carousel>
                    </Grid>
                    <Grid item xs="auto" sx={{marginLeft: "100px", position: "relative"}}>
                        <Grid>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3">{product.name}, {product.price}</Typography>
                                <Typography variant="h4">{product.description}</Typography>
                                <Typography variant="h5">{product.color}, {product.size}</Typography>
                                <Typography variant="h6">{product.quantity} available</Typography>
                            </ThemeProvider>
                        </Grid>
                        <ProductCustomization product={product} setProduct={setProduct}/>
                        <Grid sx={{position: "absolute", bottom: "30px", display: "flex"}}>
                            <QuantityInput quantity={quantity} setQuantity={setQuantity}
                                           maxQuantity={product.quantity}/>
                            <Button variant="contained" endIcon={<AddShoppingCartIcon/>}
                                    onClick={() => {
                                        if (quantity < 1)
                                            return alert("Please select a quantity");
                                        fetch("http://localhost:8080/products/addProductToCart?id=" + product.id
                                            + "&quantity=" + quantity)
                                        .then(res => {
                                            if (res.status === 404) {
                                                alert("No more of this product available");
                                            } else {
                                                alert("Product added to cart");
                                            }
                                        });
                                    }}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProductInfo;