import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.map((p) => p.image);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="grid grid-flow-col auto-cols-[100%] transition-transform duration-[2s]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="p-4 md:p-8 sm:flex flex-row-reverse justify-center items-center gap-4"
              >
                <div
                  className="w-full h-52 md:h-[400px] bg-contain bg-center bg-no-repeat mb-4 hover:scale-105 transition duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="block w-full h-full"
                  ></Link>
                </div>
                <div className="sm:max-w-[50%] grid gap-2">
                  <h2 className="text-lg md:text-2xl font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-none">
                    {item.description}
                  </p>
                  <p className="text-red-600 text-lg font-medium">
                    ${item.price}
                  </p>
                  <Link
                    to={`/product/${item.id}`}
                    className="w-fit py-1 px-8 uppercase font-medium bg-neutral-900 text-white bg-gradient-to-r from-red-500 to-orange-500 hover:brightness-110"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-fit m-auto my-1 flex gap-3">
        <button
          className="rounded-lg p-2 bg-slate-100 hover:outline outline-2 outline-slate-200"
          onClick={prevSlide}
        >
          <span className="sr-only">Previous Slide</span>
          <ArrowBackIosRoundedIcon />
        </button>
        <button
          className="rounded-lg p-2 bg-slate-100 hover:outline outline-2 outline-slate-200"
          onClick={nextSlide}
        >
          <span className="sr-only">Next Slide</span>
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
