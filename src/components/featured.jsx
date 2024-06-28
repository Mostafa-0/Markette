import { useContext } from "react";
import { productContext } from "../context/productContext";
import Carousel from "./carousel";
import newArrival from "../assets/new-arrival.svg";

function Featured() {
  const { products } = useContext(productContext);

  if (!products || products.length < 1) {
    return;
  }

  const featuredProducts = [
    products[13],
    products[2],
    products[11],
    products[5],
    products[12],
    products[16],
    products[4],
  ];
  return (
    <section id="featured" className="m-auto my-4 p-4 lg:p-12">
      <div className="tracking-wider mb-12 relative">
        <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-medium mb-4">
          Discover Our <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">Featured</span> Products
        </h2>
        <p className="max-w-4xl">
          Explore our top-rated picks, specially chosen to showcase the best we
          offer. From innovative gadgets to stylish accessories, find
          high-quality products that impress and delight. Don&apos;t miss these
          customer favorites!
        </p>
      </div>
      <div className="m-auto relative">
        <Carousel data={featuredProducts} />
        <img
          src={newArrival}
          alt="New Arrival"
          className="w-24 sm:w-32 md:w-40 absolute -top-4 md:top-5 left-0"
        />
      </div>
    </section>
  );
}

export default Featured;
