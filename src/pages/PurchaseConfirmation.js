import React from "react";
import {useParams} from "react-router-dom";

const PurchaseConfirmation = () => {
    let {product} = useParams();

    return (
        <div>
            <h1>PurchaseConfirmation for {product}</h1>
        </div>
    );
}

export default PurchaseConfirmation;