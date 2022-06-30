import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";

const CheckoutListItem = ({product}) => {
    const {id, name, price, color, size, quantity, image} = product;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={image}/>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {price}
                        </Typography>
                        {" — " + color + " / " + size + " / amount: " + quantity}
                    </React.Fragment>
                }
            />
            <IconButton color="primary" aria-label="delete" onClick={() => {
                fetch('http://localhost:8080/cart/removeProductFromCart/' + id)
                    .then(res => res.json())
                    .catch(err => console.log(err));
            }}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}

export default CheckoutListItem;