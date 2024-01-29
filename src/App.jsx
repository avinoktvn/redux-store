import "./App.css";
import { useState } from "react";
import Header from "./assets/components/Header";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/cart/CartModal";

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleCloseModalCart = () => {
    setIsOpenModalCart(false);
  };

  return (
    <>
      {isOpenModalCart ? <CartModal handleCloseModalCart={handleCloseModalCart} /> : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList />
      </main>
    </>
  );
}

export default App;
