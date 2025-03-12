import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Logo from "./ui/Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const CustomNavLink = ({ to, label, children, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-3 lg:py-5 cursor-pointer tracking-wider hover:text-orange-600 ${
          isActive ? "text-orange-600" : ""
        }`
      }
      aria-label={label}
      title={label}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};

function Navbar() {
  const { cartAmount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`sticky top-0 w-full flex justify-between items-center px-[4vw] font-medium bg-white bg-opacity-80 backdrop-blur-lg border-b z-30 transition-all duration-300`}
    >
      <div className="lg:order-2">
        <button
          className="block lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Show navigation"
        >
          <MenuIcon fontSize="medium" titleAccess="Menu" />
          <span className="sr-only">Show Navbar</span>
        </button>

        {/* Menu Links */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-screen w-[70%] max-w-[280px] flex flex-col p-6 lg:p-0 bg-white transition duration-300 lg:static lg:translate-x-0 lg:w-full lg:max-w-none lg:h-fit lg:flex-row lg:gap-[4vw] lg:bg-transparent
          ${isOpen ? "-translate-x-0" : "-translate-x-[105%]"}`}
        >
          <button
            className="lg:hidden mb-3 ml-auto"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <CloseIcon fontSize="medium" titleAccess="Menu" />
          </button>

          <CustomNavLink to="/" label="Home" setIsOpen={setIsOpen}>
            Home
          </CustomNavLink>
          <CustomNavLink
            to="/category/Men's Clothing"
            label="Mens Clothing"
            setIsOpen={setIsOpen}
          >
            Men&apos;s Clothing
          </CustomNavLink>
          <CustomNavLink
            to="/category/Women's Clothing"
            label="Women's Clothing"
            setIsOpen={setIsOpen}
          >
            Women&apos;s Clothing
          </CustomNavLink>
          <CustomNavLink
            to="/category/Jewelery"
            label="Jewelery"
            setIsOpen={setIsOpen}
          >
            Jewelery
          </CustomNavLink>
          <CustomNavLink
            to="/category/Electronics"
            label="Electronics"
            setIsOpen={setIsOpen}
          >
            Electronics
          </CustomNavLink>
        </div>
      </div>

      <Logo className="text-lg" />

      <NavLink className="lg:order-2" to="/cart" aria-label="Cart" title="Cart">
        <div className="relative">
          <ShoppingCartIcon fontSize="medium" titleAccess="Cart" />
          {cartAmount > 0 && (
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[11px] font-semibold grid place-content-center size-5 rounded-full">
              {cartAmount}
            </div>
          )}
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
