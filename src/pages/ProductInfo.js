import React from "react";
import {useParams} from "react-router-dom";

const ProductInfo = () => {
    let {product} = useParams();
    return (
        <div>
            <h1>ProductInfo for {product}</h1>
        </div>
    );
}

export default ProductInfo;