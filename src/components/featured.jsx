import { useContext } from "react";
import { productContext } from "../context/productContext";
import Carousel from "./carousel";

function Featured() {
  const { products } = useContext(productContext);

  if (!products || products.length < 1) {
    return <div>Loading...</div>;
  }

  const featuredProducts = [
    products[1],
    products[5],
    products[11],
    products[16],
    products[18],
    products[2],
  ];
  return (
    <section className="m-auto my-4 p-4 lg:p-12">
      <div className="tracking-wider mb-14 border-l-2 pl-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-medium mb-4">
          Discover Our Featured Products
        </h2>
        <p className="max-w-4xl">
          Explore our top-rated picks, specially chosen to showcase the best we
          offer. From innovative gadgets to stylish accessories, find
          high-quality products that impress and delight. Don&apos;t miss these
          customer favorites!
        </p>
      </div>
      <div className="m-auto">
        <Carousel data={featuredProducts} />
      </div>
    </section>
  );
}

export default Featured;
