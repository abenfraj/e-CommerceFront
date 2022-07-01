import {Box, TextField} from "@mui/material";

const QuantityInput = ({quantity, setQuantity, maxQuantity}) => {

    return (
        <div>
            <Box sx={{width: 200, maxWidth: '50%'}}>
                <TextField
                    id="quantity-value"
                    label="Quantity"
                    type="number"
                    size="small"
                    value={quantity}
                    onChange={(e) => {
                        if (isNaN(parseInt(e.target.value))) {
                            e.target.value = "";
                            setQuantity(0);
                            return;
                        }

                        const value = parseInt(e.target.value);

                        if (value > maxQuantity) {
                            e.target.value = maxQuantity;
                            setQuantity(maxQuantity);
                            return;
                        }
                        if (value < 1) {
                            setQuantity(0);
                            return;
                        }
                        setQuantity(value);
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