import {useState, useEffect} from 'react';
import ProductCard from "../components/ProductCard";
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";

const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        document.title = "e-Commerce - Home";
        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => {
                    setProducts(data);
                }
            );
    });

    return (
        <Container sx={{backgroundColor:"#b5c6cf"}} maxWidth="m">
            <Grid container spacing={2} alignItems="center">
                {products.map(product => (
                    <Grid key={product.id} item xs={2.4}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;