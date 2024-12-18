import "./App.css";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { PRODUCTS } from "./Products.js";

function App() {
  return (
    <div className="App">
      <h3>Welcome to the store!</h3>
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
