import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({product}) => {
    const {id, name, description, price, images, color, size} = product;

    return (
        <Card sx={{maxWidth: 345, backgroundColor: "#32373b", marginTop:"20px", marginBottom:"5px"}}>
            <CardMedia
                component="img"
                height="320"
                image={images[0]}
                alt="product-image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                    {name}, {price}
                </Typography>
                <Typography variant="body2" color="white">
                    {description}, {color}, {size}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" size="small" onClick={() => {
                    window.location.href = `/product-info/${id}`;
                }}>More Info</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;