// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemCart } from "../cart/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleClickBuy = (product) => {
    dispatch(addItemCart(product));
  };

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {products.map((product) => {
        return (
          <div key={product.id} className="bg-white rounded-xl shadow p-4">
            <div className="group relative w-[80%] h-[250px] mx-auto overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-105 transition-scale duration-500 ease-in-out" />
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8" onClick={() => handleClickBuy(product)}>
                buy now
              </button>
              {/* <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8">
                add to cart
              </button> */}
              <h3 className="p-3 font-bold">{product.title}</h3>
              <h3 className="">{product.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
