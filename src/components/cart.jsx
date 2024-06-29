import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "./navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import emptyCart from "../assets/empty-cart.png";

function Cart() {
  const {
    cart,
    cartAmount,
    totalPrice,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  return (
    <div className="min-h-svh text-black">
      <Navbar customStyles={"bg-black text-white"} cartIcon={"hidden"} />
      <section>
        <div className="px-4 my-4 lg:m-10">
          <button
            onClick={() => history.back()}
            className="w-fit cursor-pointer mb-2 hover:text-neutral-600"
          >
            <ArrowBackIcon fontSize="medium" />
          </button>
          <h1 className="text-2xl border-b-2 py-4 tracking-wide font-semibold">
            SHOPPING CART ({cartAmount})
          </h1>
        </div>

        {cart.length == 0 && (
          <div className="grid place-items-center gap-4 text-lg text-center p-4 text-neutral-500">
            <img
              src={emptyCart}
              alt="empty cart"
              className="block w-full max-w-64"
            />
            <p>Looks like your cart is empty, Start adding some items!</p>
            <Link
              to="/"
              className="show-now-btn relative my-8 uppercase text-white w-full max-w-48 px-4 tracking-widest"
            >
              Shop now!
            </Link>
          </div>
        )}

        {cart.length != 0 && (
          <>
            <div className="p-4 md:px-12 grid gap-4 tracking-wide">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-2 gap-y-6 border-b-2 py-6"
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="w-fit m-auto hover:scale-110 transition duration-500"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-36 m-auto"
                    />
                  </Link>
                  <div className="flex flex-col gap-6 justify-around lg:px-8">
                    <div>
                      <div className="text-gray-500">{item.category}</div>
                      <div className="font-bold text-xl">{item.title}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl flex justify-between gap-4 sm:gap-10 w-fit items-center text-stone-900 border-2 border-gray-200">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                        >
                          <RemoveIcon fontSize="large" titleAccess="Remove" />
                        </button>
                        {item.quantity}
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                        >
                          <AddIcon fontSize="large" titleAccess="Add" />
                        </button>
                      </div>
                      <div className="text-md tracking-wider">
                        ${item.price}
                      </div>
                    </div>

                    <div className="text-xl font-semibold flex justify-between">
                      <div className="tracking-wider">
                        ${parseFloat(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        <DeleteIcon
                          fontSize="large"
                          titleAccess="Delete"
                          className="text-red-600 hover:brightness-110 cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 text-md tracking-wide p-4 lg:px-12">
              <div className="text-xl">
                TOTAL: ${parseFloat(totalPrice).toFixed(2)}
              </div>
              <div className="flex flex-col-reverse md:flex-row flex-wrap gap-4">
                <button
                  onClick={() => clearCart()}
                  className="flex justify-center items-center gap-2 w-full md:max-w-60 bg-red-600 hover:bg-red-500 text-white p-2 tracking-widest"
                >
                  <DeleteForeverIcon fontSize="small" />
                  Clear Cart
                </button>
                <button className="flex justify-center items-center gap-2 w-full md:max-w-60 bg-neutral-950 hover:bg-neutral-800 text-white p-2 tracking-widest">
                  <ShoppingCartCheckoutIcon fontSize="small" />
                  Checkout
                </button>
              </div>
            </div>
            <div className="text-center p-4 mb-6 lg:p-12">
              <Link
                to="/"
                className="p-2 tracking-widest font-semibold border-b-2 border-stone-800 hover:text-orange-500 hover:border-orange-500"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Cart;
