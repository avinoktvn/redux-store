import Modal from "../../assets/components/Modal";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalItems, selectCartTotalPrices } from "./cartSlice";

export const CartModal = ({ handleCloseModalCart }) => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrices);

  const handleCheckoutToWhatsapp = () => {
    if (totalItems === 0) return;

    const phoneNumber = "";
    const message = encodeURIComponent(`Halo, saya ingin membeli ${totalItems} barang dengan total harga ${totalPrice}.`);

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(URL, "_blank");
  };

  return (
    <Modal>
      <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg-w:-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
          {cartItems.map((product) => {
            return (
              <div key={product.id} className="w-full border-b-4 border-gray-200 pb-4">
                <div className="flex items-center w-full">
                  <div className="w-[120px] h-auto overflow-hidden">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="ml-10 w-[75%]">
                    <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{product.price}</h4>
                      <h3 className="text-lg font-bold">{product.totalPrice}</h3>
                    </div>
                    <div className="flex items-center gap-4 mt-4 ml-auto">
                      <button type="button" className="rounded-full  bg-blue-400  text-white flex items-center justify-center w-5 h-5 px-3">
                        +
                      </button>
                      <h3>{product.totalItems}</h3>
                      <button type="button" className="rounded-full  bg-blue-400  text-white flex items-center justify-center w-5 h-5 px-3">
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-md font-bold">Total Item: {totalItems}</h3>
          <h3 className="text-md font-bold">Total Price: {totalPrice}</h3>
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-2 px-4" onClick={handleCloseModalCart}>
            Close
          </button>
          <button type="button" className="bg-green-700 hover:bg-slate-800 text-white font-bold rounded-lg text-sm py-2 px-4" onClick={handleCheckoutToWhatsapp}>
            Checkout (WA)
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default CartModal;
