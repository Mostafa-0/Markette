import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Navbar({ customStyles, cartIcon }) {
  const { cartAmount } = useContext(CartContext);

  return (
    <nav className={`${customStyles} flex justify-between w-full z-50`}>
      <Link to="/" className="font-bold text-2xl tracking-wider">
        HOME
      </Link>
      <div
        className={`${cartIcon} w-9 h-9 bg-neutral-100 flex justify-center items-center fixed top-[1em] right-[1.4em] rounded-full`}
      >
        <Link
          to="/Cart"
          className="relative p-2 text-black hover:text-neutral-600"
        >
          <ShoppingCartIcon fontSize="small" titleAccess="Cart" />
        </Link>
        {cartAmount > 0 && (
          <div className="bg-[#3ab5d0] text-white text-sm font-semibold grid place-content-center w-[21px] h-[21px] rounded-full absolute -top-1 -right-2">
            {cartAmount}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
