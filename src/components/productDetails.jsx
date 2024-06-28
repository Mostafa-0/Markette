import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/productContext";
import { CartContext } from "../context/CartContext";
import Navbar from "./navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductDetails() {
  const { products, isLoading, cartBtns, updateBtnText } =
    useContext(productContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (isLoading) {
    return (
      <div className="min-h-dvh text-center text-xl grid place-items-center">
        Loading Product Details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-dvh text-center text-xl grid place-items-center">
        Product Not Found.
      </div>
    );
  }

  return (
    <>
      <Navbar customStyles={"text-black"}></Navbar>
      <div className="px-4 py-8 sm:p-14 lg:p-16">
        <button
          onClick={() => history.back()}
          className="w-fit cursor-pointer mb-2 hover:text-neutral-600"
        >
          <ArrowBackIcon />
        </button>
        <div className="flex flex-col lg:flex-row gap-12 justify-evenly items-center p-4">
          <div className="w-full m-auto lg:w-fit lg:m-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[400px] m-auto"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 py-4 lg:max-w-[50%]">
            <div className="grid gap-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold">
                  {product.title}
                </h4>
                <p className="prose text-lg">{product.category}</p>
              </div>
              <p className="md:text-xl tracking-wide">{product.description}</p>
              <div className="tracking-wider font-medium text-xl text-red-600">
                ${parseFloat(product.price).toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product, product.id);
                updateBtnText(product.id);
              }}
              className="uppercase h-fit tracking-wider font-semibold p-2 bg-neutral-900 text-white hover:bg-orange-500 transition-all"
            >
              {cartBtns[product.id] || "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
