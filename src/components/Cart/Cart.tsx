import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { Button } from "../ui/button";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { MdOutlineDeleteSweep } from "react-icons/md";
const cartItems = [
  {
    id: 1,
    title: "Wireless Gaming Mouse",
    price: 49.99,
    image: "https://picsum.photos/seed/mouse/200/200",
    quantity: 2,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 89.99,
    image: "https://picsum.photos/seed/keyboard/200/200",
    quantity: 1,
  },
  {
    id: 3,
    title: "Noise Cancelling Headphones",
    price: 129.99,
    image: "https://picsum.photos/seed/headphones/200/200",
    quantity: 3,
  },
];

const Cart = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center bg-white border rounded-full shadow-sm py-2 pr-10 pl-2 gap-4"
              >
                {/* Product Image */}
                <div className="col-span-2 flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="col-span-4">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-4 flex items-center justify-center gap-3">
                  <Button className="h-8 w-8 border bg-white shadow-sm border-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-100 cursor-pointer text-black">
                    <HiMinusSmall/>
                  </Button>
                  <span className="font-medium text-gray-800">
                    {item.quantity}
                  </span>
                  <Button className="h-8 w-8 border bg-white shadow-sm border-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-100 cursor-pointer text-black">
                    <HiPlusSmall/>
                  </Button>
                </div>

                {/* Remove Button */}
                <div className="col-span-2 flex justify-end">
                  <button className="text-red-600 hover:text-red-700">
                    <MdOutlineDeleteSweep className=" text-xl"/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Summary</h3>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>$ 500</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-lg text-gray-900 mb-4">
              <span>Total</span>
              <span>$ 250</span>
            </div>
            <button className="w-full bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406] text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
