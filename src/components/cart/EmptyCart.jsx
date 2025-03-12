import { Link } from "react-router-dom";
import emptyCart from "../../assets/empty-cart.webp";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 min-h-[60svh]">
      <img src={emptyCart} alt="empty cart" className="block w-full max-w-40 md:max-w-64" />
      <p className="text-center text-neutral-500">
        Looks like your cart is empty, Start adding some items!
      </p>
      <Link
        to="/"
        className="relative uppercase text-sm bg-black text-white py-2 px-8 mt-4 rounded-md tracking-wider hover:before:scale-y-100 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(140deg,hsla(0,84%,65%,1)0%,hsla(25,95%,58%,1)100%)] before:scale-y-0 before:origin-bottom before:transition-all"
      >
        <span className="relative z-10">Shop now!</span>
      </Link>
    </div>
  );
}

export default EmptyCart;
