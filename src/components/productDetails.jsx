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
      <div className="px-4 py-24 md:p-14 lg:p-24">
        <button
          onClick={() => history.back()}
          className="w-fit cursor-pointer px-4 lg:mx-10 mb-2"
        >
          <ArrowBackIcon fontSize="medium" />
        </button>
        <div className="flex flex-col md:flex-row gap-12 justify-evenly items-center p-4">
          <div className="w-full m-auto lg:w-fit lg:m-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[200px] md:max-w-[300px] m-auto"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 py-4 md:max-w-[50%]">
            <div className="grid gap-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold">
                  {product.title}
                </h4>
                <p className="prose text-lg">{product.category}</p>
              </div>
              <p className="md:text-xl tracking-wide">{product.description}</p>
              <div className="tracking-wider font-medium text-xl text-red-700">
                ${parseFloat(product.price).toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product, product.id);
                updateBtnText(product.id);
              }}
              className="uppercase h-fit tracking-wider font-semibold p-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
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
