import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { productContext } from "../context/productContext";

function Products() {
  const { products, error, isLoading, cartBtns, updateBtnText } =
    useContext(productContext);
  const { addToCart } = useContext(CartContext);
  const [query, setQuery] = useState("");

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="shop" className="mb-12">
      <h2 className="text-center text-2xl md:text-3xl mb-8">
        Explore Our Products
      </h2>
      {error && <div>{error}</div>}
      {isLoading && <div className="text-center text-lg m-8">Loading...</div>}
      {!isLoading && !error && (
        <form className="max-w-sm m-auto px-4 md:p-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              placeholder="Search for a product"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:border-transparent"
            />
          </div>
        </form>
      )}
      <div className="products flex flex-wrap justify-evenly gap-y-16 gap-x-6 p-4">
        {filteredProducts &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product flex flex-col w-full md:max-w-[325px] bg-white"
            >
              <div className="p-12 min-h-80 border" title={product.title}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-48 m-auto block hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-between grow">
                <div className="flex flex-col justify-between h-full gap-1 py-3">
                  <div>
                    <p className="prose capitalize">{product.category}</p>
                    <Link to={`/product/${product.id}`}>
                      <h4
                        className="text-xl font-bold mb-2 md:line-clamp-1"
                        title={product.title}
                      >
                        {product.title}
                      </h4>
                    </Link>
                  </div>
                  <div className="tracking-wide font-semibold text-xl text-red-600">
                    ${parseFloat(product.price).toFixed(2)}
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(product, product.id);
                    updateBtnText(product.id);
                  }}
                  className="h-fit uppercase tracking-wider font-semibold p-2 text-sm bg-white border border-neutral-900 hover:text-white hover:border-orange-500 hover:bg-orange-500 transition-all"
                >
                  {cartBtns[product.id] || "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        {/* Fallback message */}
        {!isLoading && !error && filteredProducts.length < 1 && (
          <div className="text-center mt-8 text-lg text-gray-500">
            No products found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
