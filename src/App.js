import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductInfo from "./pages/ProductInfo";
import PurchaseConfirmation from "./pages/PurchaseConfirmation";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import {Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";


const getItemsNumber = cart => Object.values(cart).reduce((a, b) => a + b);

const App = () => {
    const [itemsNumber, setItemsNumber] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
            fetch("http://localhost:8080/cart")
                .then(res => res.json())
                .then(data => {
                        setCart(data);
                        setItemsNumber(getItemsNumber(data));
                    }
                );
        }, [cart]);

    return (
        <Router>
            <Navbar itemsNumber={itemsNumber}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/product-info/:product" element={<ProductInfo/>}/>
                <Route path="/purchase-confirmation/:product" element={<PurchaseConfirmation/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
