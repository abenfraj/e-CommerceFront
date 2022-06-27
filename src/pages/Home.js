import {useState, useEffect} from 'react';
import ProductCard from "../components/ProductCard";
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => {
                    setProducts(data);
                }
            );
    });

    return (
        <Container maxWidth="m">
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