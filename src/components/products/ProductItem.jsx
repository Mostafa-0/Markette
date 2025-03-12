import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import Button from "../ui/Button";

function ProductItem({ product }) {
  const { cartBtns, updateBtnText } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product flex flex-col w-full max-w-sm mx-auto">
      <Link
        to={`/product/${product.id}`}
        className="p-6 min-h-72 flex justify-center items-center border rounded-md shadow-sm"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col gap-1 py-2">
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <div className="text-lg font-semibold text-primary">
          ${parseFloat(product.price).toFixed(2)}
        </div>
      </div>

      <Button
        onClick={() => {
          addToCart(product, product.id);
          updateBtnText(product.id);
        }}
        className="mt-auto"
      >
        {cartBtns[product.id] || "Add To Cart"}
      </Button>
    </div>
  );
}

export default ProductItem;
