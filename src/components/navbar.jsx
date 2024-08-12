import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

const CustomNavLink = ({ to, label, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `cursor-pointer text-lg tracking-wider hover:text-orange-400 ${
          isActive ? "text-orange-400" : ""
        }`
      }
      aria-label={label}
      title={label}
    >
      {children}
    </NavLink>
  );
};

function Navbar() {
  const { cartAmount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    console.log("hi");

    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-max fixed top-0 right-1/2 left-1/2 -translate-x-1/2 z-50 mt-4 flex items-center justify-between gap-8 rounded-full bg-orange-100 bg-opacity-70 backdrop-blur-md py-3 px-6">
      <button onClick={handleMenu} className="hover:text-orange-400">
        {!menuOpen && <MenuIcon fontSize="medium" titleAccess="Menu" />}
        {menuOpen && <CloseIcon fontSize="medium" titleAccess="Menu" />}
      </button>

      <div
        className={`absolute top-[115%] w-max inset-x-0 rounded-md py-4 px-6 transition grid gap-4 bg-orange-50
          ${
            menuOpen
              ? "scale-100"
              : "scale-0 -translate-y-[60%] -translate-x-[30%]"
          }`}
      >
        <CustomNavLink to="/" label="Home">
          Home
        </CustomNavLink>
        <CustomNavLink to="/category/Men's Clothing" label="Mens Clothing">
          Men's Clothing
        </CustomNavLink>
        <CustomNavLink to="/category/Women's Clothing" label="Women's Clothing">
          Women's Clothing
        </CustomNavLink>
        <CustomNavLink to="/category/Jewelery" label="Jewelery">
          Jewelery
        </CustomNavLink>
        <CustomNavLink to="/category/Electronics" label="Electronics">
          Electronics
        </CustomNavLink>
      </div>

      <button
        className="hover:text-orange-400"
        onClick={() => document.getElementById("shop").scrollIntoView()}
      >
        <SearchIcon fontSize="medium" titleAccess="Search" />
      </button>
      <CustomNavLink to="/cart" label="Electronics">
        <div className="relative">
          <ShoppingCartIcon fontSize="medium" titleAccess="Cart" />
          {cartAmount > 0 && (
            <div className="bg-orange-400 text-white text-xs font-semibold grid place-content-center w-[20px] h-[20px] rounded-full absolute -top-1 -right-2">
              {cartAmount}
            </div>
          )}
        </div>
      </CustomNavLink>
    </nav>
  );
}

export default Navbar;
