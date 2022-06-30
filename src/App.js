import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import PurchaseConfirmation from "./pages/PurchaseConfirmation";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";


const getItemsNumber = cart => {
    let sum = 0;
    let products = Object.keys(cart);
    for (const product of products) {
        sum += parseInt(cart[product].quantity);
    }
    return sum;
}

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
                <Route path="/product-info/:productId" element={<ProductInfo/>}/>
                <Route path="/purchase-confirmation/:product" element={<PurchaseConfirmation/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
