import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@mui/material";
import React, {useState, useEffect} from "react";

const ProductCustomization = ({product, setProduct}) => {
    const {name, color, size} = product;
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedColor, setSelectedColor] = useState(color);
    const [selectedSize, setSelectedSize] = useState(size);
    let tmpSize = "";

    useEffect(() => {
        fetch("http://localhost:8080/product/" + name + "/colors")
            .then(res => res.json())
            .then(data => setColors(data))
            .catch(err => console.log(err));
        fetch("http://localhost:8080/product/" + name + "/" + color + "/sizes")
            .then(res => res.json())
            .then(data => setSizes(data))
            .catch(err => console.log(err));
        setSelectedColor(color);
        setSelectedSize(size);

    }, [color, name, size]);


    return (<Grid>
            <FormControl sx={{marginTop: "50px"}}>

                <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedColor ?? " "}
                    name="radio-buttons-group"
                    onChange={(e) => {
                        setSizes([]);
                        fetch("http://localhost:8080/product/" + name + "/" + e.target.value + "/sizes")
                            .then(res => res.json())
                            .then(data => {
                                setSizes(data);
                                tmpSize = data[0];
                                setSelectedSize(data[0]);
                                setSelectedColor(e.target.value);
                                fetch("http://localhost:8080/product/find/" + name + "/" + e.target.value + "/" + tmpSize)
                                    .then(res => res.json())
                                    .then(data => {
                                        setProduct(data);
                                        window.history.pushState(null, null, "/product-info/" + data.id);
                                    })
                                    .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err));


                    }
                    }
                >
                    {colors.map((color, index) => <FormControlLabel key={index} value={color} control={<Radio/>}
                                                                    label={color}/>)}
                </RadioGroup>
            </FormControl>
            <FormControl sx={{marginRight: "50px", marginTop: "50px"}}>
                <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedSize ?? " "}
                    name="radio-buttons-group"
                    onChange={(e) => {
                        setSelectedSize(e.target.value);
                        tmpSize = e.target.value;
                        fetch("http://localhost:8080/product/find/" + name + "/" + selectedColor + "/" + e.target.value)
                            .then(res => res.json())
                            .then(data => {
                                setProduct(data);
                                window.history.pushState(null, null, "/product-info/" + data.id);
                            })
                            .catch(err => console.log(err));

                    }}
                >
                    {sizes.map((size, index) => <FormControlLabel
                        key={index}
                        value={size}
                        control={<Radio/>}
                        label={size}/>)}
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}

export default ProductCustomization;