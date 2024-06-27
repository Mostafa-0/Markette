import { useContext } from "react";
import { productContext } from "../context/productContext";
import Carousel from "./carousel";

function Featured() {
  const { products } = useContext(productContext);

  if (!products || products.length < 1) {
    return <div>Loading...</div>;
  }

  const featuredProducts = [products[1], products[7], products[11]];
  const images = featuredProducts.map((p) => p.image);
  console.log(images);
  return <Carousel images={images} />;
}

export default Featured;