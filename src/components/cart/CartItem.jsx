import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({
  item,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl gap-8">
      {/* Product Image */}
      <Link
        to={`/product/${item.id}`}
        className="size-32 m-auto md:mx-0 hover:scale-110 transition duration-500"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Product Details */}
      <div className="grow flex flex-col justify-around gap-4 md:max-w-md">
        <div>
          <div className="text-gray-600 text-sm capitalize">
            {item.category}
          </div>
          <h3 className="font-bold text-base">{item.title}</h3>
        </div>

        <div className="flex justify-between items-center">
          <div>
            {item.quantity} x ${item.price}
          </div>
          <div className="text-orange-600 font-semibold">
            ${parseFloat(item.price * item.quantity).toFixed(2)}
          </div>
        </div>

        <div className="flex justify-between">
          {/* Quantity modifier */}
          <div className="text-xl flex gap-4 w-fit items-center bg-neutral-50 border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => decreaseQuantity(item.id)}
              title="Decrease Quantity"
              aria-label="Decrease Quantity"
              className="hover:bg-gray-200 py-1 px-3"
            >
              <RemoveIcon fontSize="medium" />
            </button>
            {item.quantity}
            <button
              onClick={() => increaseQuantity(item.id)}
              title="Increase Quantity"
              aria-label="Increase Quantity"
              className="hover:bg-gray-200 py-1 px-3"
            >
              <AddIcon fontSize="medium" />
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            title="Decrease Quantity"
            aria-label="Decrease Quantity"
          >
            <DeleteIcon
              fontSize="medium"
              className="text-red-600 hover:brightness-125"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
