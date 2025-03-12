import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductDetails() {
  const { products, isLoading, cartBtns, updateBtnText } =
    useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === parseInt(id));

  if (isLoading) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center text-center">
        404 | Product Not Found.
      </div>
    );
  }

  return (
    <main className="mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
      >
        <ArrowBackIcon fontSize="small" /> Back
      </button>

      {/* Product Layout */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 xl:gap-24 items-center justify-center py-6">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.title}
          className="max-h-56 md:max-h-80"
        />

        {/* Details Section */}
        <div className="flex flex-col gap-3 md:gap-6 md:max-w-xl">
          <div>
            <p className="text-gray-500 text-sm capitalize">
              {product.category}
            </p>
            <h1 className="text-xl md:text-2xl font-semibold">
              {product.title}
            </h1>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="text-lg md:text-xl font-semibold text-primary">
            ${parseFloat(product.price).toFixed(2)}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={() => {
              addToCart(product, product.id);
              updateBtnText(product.id);
            }}
          >
            {cartBtns[product.id] || "Add To Cart"}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
