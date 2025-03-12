import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Button from "../components/ui/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import EmptyCart from "../components/cart/EmptyCart";
import CartItem from "../components/cart/CartItem";

function Cart() {
  const {
    cart,
    cartAmount,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <main>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
      >
        <ArrowBackIcon fontSize="small" /> Back
      </button>

      {/* Header */}
      <h1 className="sr-only">
        SHOPPING CART {cartAmount !== 0 ? `(${cartAmount})` : ""}
      </h1>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-full max-w-2xl mx-auto py-6">
          {/* Cart Items List */}
          <div className="flex flex-col items-center py-8 gap-14">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="grid gap-4 mt-4">
            <div>
              Total:{" "}
              <span className="text-primary font-bold">
                ${parseFloat(totalPrice).toFixed(2)}
              </span>
            </div>
            <Button className="w-full">
              <ShoppingCartCheckoutIcon fontSize="xsmall" className="mr-2" />
              Checkout
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
