import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../context/productContext";
import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const { cartBtns, updateBtnText } = useContext(productContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div
      key={product.id}
      className="product flex flex-col w-full md:max-w-[325px] bg-white"
    >
      <div className="p-12 min-h-80 border grid place-items-center" title={product.title}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="max-h-48 m-auto block hover:scale-110 transition duration-500"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between grow">
        <div className="flex flex-col justify-between h-full gap-1 py-3">
          <div>
            <p className="prose capitalize">{product.category}</p>
            <Link to={`/product/${product.id}`}>
              <h4
                className="text-xl font-bold mb-2 md:line-clamp-1"
                title={product.title}
              >
                {product.title}
              </h4>
            </Link>
          </div>
          <div className="tracking-wide font-semibold text-xl text-red-600">
            ${parseFloat(product.price).toFixed(2)}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product, product.id);
            updateBtnText(product.id);
          }}
          className="h-fit uppercase tracking-wider font-semibold p-2 text-sm bg-white border border-neutral-900 hover:text-white hover:border-orange-500 hover:bg-orange-500 transition-all"
        >
          {cartBtns[product.id] || "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
