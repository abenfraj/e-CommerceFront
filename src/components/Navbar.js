import {Link} from "react-router-dom";
import {Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

const Navbar = ({itemsNumber}) => {
    return (
        <nav>
            <ul id="nav" className="nav">
                <Link to="/" className="nav__link">
                    Home
                </Link>
                <Link to="/orders" className="nav__link">
                    Orders
                </Link>
                <Link to="/cart" className="nav__link">
                    <Badge badgeContent={itemsNumber} color="primary">
                        <ShoppingCartIcon sx={{ color: "white" }}/>
                    </Badge>
                </Link>
            </ul>
        </nav>
    );
}
export default Navbar;


