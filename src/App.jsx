import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { PRODUCTS } from "./Products.js";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h3>Welcome to the store!</h3>
      <ProductList products={PRODUCTS} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
