import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.map((p) => p.image);
  console.log(images);

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
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="grid grid-flow-col auto-cols-[100%] transition-transform duration-[2.5s]"
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
                  className="w-full h-52 md:h-[400px] bg-contain bg-center bg-no-repeat mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <Link to={`/product/${item.id}`} className="block w-full h-full"></Link>
                </div>
                <div className="sm:max-w-[50%]">
                  <h2 className="text-lg md:text-2xl font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-none">
                    {item.description}
                  </p>
                  <p className="text-red-600 text-lg font-medium">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
