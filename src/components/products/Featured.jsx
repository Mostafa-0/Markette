import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Carousel from "../Carousel";

function Featured() {
  const { products } = useContext(ProductContext);

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
    <section id="featured" className="m-auto">
      <h2 className="sr-only">New Arrivals</h2>
      <Carousel data={featuredProducts} />
    </section>
  );
}

export default Featured;
