import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import {Divider, Grid} from "@mui/material";
import CheckoutListItem from "./CheckoutListItem";

const OrderListItem = ({orders}) => {
    const {orderId, products, shippingInformation, orderDate} = orders;

    const primaryString = "Order ID: " + orderId;
    return (
        <ListItem alignItems="flex-start">

            <ListItemText
                primary={primaryString}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        </Typography>
                        {products.map((product, index) =>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="subtitle1"
                                color="text.primary"
                                key={index}
                            >
                                {product.name} — {product.color} / {product.size} /
                                amount: {product.quantity}
                            </Typography>
                        )}
                        <br/>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Name:&nbsp;
                        </Typography>
                        {shippingInformation.name} ({shippingInformation.phoneNumber})
                        <br/>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Address:&nbsp;
                        </Typography>
                        {shippingInformation.address}
                        <br/>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Date:&nbsp;
                        </Typography>
                        {orderDate}

                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default OrderListItem;