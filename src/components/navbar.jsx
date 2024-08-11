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
        `cursor-pointer text-lg tracking-wider ${
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
    <nav className="flex items-center justify-between gap-2 sticky top-0 z-50 w-full bg-orange-50 py-4 px-6">
      <button onClick={handleMenu}>
        {!menuOpen && <MenuIcon fontSize="medium" titleAccess="Menu" />}
        {menuOpen && <CloseIcon fontSize="medium" titleAccess="Menu" />}
      </button>

      <div
        className={`absolute top-full h-svh left-0 -translate-x-[120%] py-4 px-6 transition flex flex-col gap-4 bg-orange-50
          min-w-[25%]
          ${menuOpen ? "translate-x-0" : ""}`}
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

      <div className="flex items-center gap-4">
        <button
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
      </div>
    </nav>
  );
}

export default Navbar;
