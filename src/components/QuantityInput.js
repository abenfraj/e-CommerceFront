import {useState} from "react";
import {Box, TextField} from "@mui/material";

const QuantityInput = ({quantity, setQuantity, maxQuantity}) => {
    let updatedQuantity = quantity;

    return (
        <div>
            <Box sx={{width: 200, maxWidth: '50%'}}>
                <TextField
                    id="quantity-value"
                    label="Quantity"
                    type="number"
                    size="small"
                    value={updatedQuantity}
                    onChange={(e) => {
                        if (e.target.value > maxQuantity) {
                            updatedQuantity = maxQuantity;
                            setQuantity(maxQuantity);
                        } else if (e.target.value < 1) {
                            updatedQuantity = undefined;
                            setQuantity(undefined);
                        } else {
                            updatedQuantity = e.target.value;
                            setQuantity(e.target.value);
                        }
                        }
                    }
                    InputLabelProps={{shrink: true}}
                    inputProps={{
                        inputMode: 'numeric', pattern: '[0-9]*', min: 1, max: maxQuantity, step: 1
                    }}
                />
            </Box>
        </div>
    )
        ;
}

export default QuantityInput;