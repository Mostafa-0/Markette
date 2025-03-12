import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Carousel = ({ data }) => {
  const { cartBtns, updateBtnText } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const images = data.map((p) => p.image);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative overflow-hidden max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full shrink-0 flex justify-center items-center"
          >
            <div className="grid md:grid-cols-[1fr,1.8fr] items-center gap-y-8 gap-x-20 p-4 sm:p-8 md:p-12 lg:p-24 max-w-6xl">
              {/* Product Image */}
              <div
                className="w-full h-40 md:h-64 bg-contain bg-center bg-no-repeat transition-transform duration-500 hover:scale-105 rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <Link
                  to={`/product/${item.id}`}
                  className="block w-full h-full"
                >
                  <span className="sr-only">Product&apos;s Details</span>
                </Link>
              </div>

              {/* Product Detais */}
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base line-clamp-3">
                  {item.description}
                </p>
                <div className="text-lg lg:text-xl font-bold text-primary">
                  ${item.price.toFixed(2)}
                </div>
                <button
                  onClick={() => {
                    addToCart(item, item.id);
                    updateBtnText(item.id);
                  }}
                  className="mt-2 w-full inline-flex animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#9a3412,55%,#000103)] bg-[length:250%_100%] py-2 px-6 font-medium text-gray-200 hover:text-white transition-all shadow-xl"
                >
                  {cartBtns[item.id] || "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex space-x-2 my-1 justify-center">
        {data.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full hover:scale-125 transition ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Slide number {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100 border bg-opacity-40 p-2 rounded-full hover:text-primary transition-transform duration-300 hover:scale-110"
        onClick={prevSlide}
        title="Previous Slide"
        aria-label="Previous Slide"
      >
        <ArrowBackIosRoundedIcon fontSize="small" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 border bg-opacity-40 p-2 rounded-full hover:text-primary transition-transform duration-300 hover:scale-110"
        onClick={nextSlide}
        title="Next Slide"
        aria-label="Next Slide"
      >
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </button>
    </div>
  );
};

export default Carousel;
