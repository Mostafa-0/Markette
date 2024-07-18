import { useContext, useState, useRef } from "react";
import { productContext } from "../context/productContext";
import ProductItem from "./productItem";

function Products() {
  const { products, error, isLoading } = useContext(productContext);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const searchInputRef = useRef(null);

  const filteredProducts = products?.filter((product) => {
    const matchesQuery = query
      ? product.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;
    return matchesQuery && matchesCategory;
  });

  const categories = [
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  const clearSearch = () => {
    setQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section id="shop" className="my-12">
      <h2 className="text-center text-2xl md:text-3xl mb-4">
        Explore Our Products
      </h2>

      {error && <div>{error}</div>}
      {isLoading && <div className="text-center text-lg m-8">Loading...</div>}

      {!isLoading && !error && (
        <div className="flex flex-wrap gap-4 justify-around items-center px-4 md:p-4">
          <form
            className="flex items-center gap-2 w-full max-w-lg relative"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="default-search" className="sr-only">
              Search For a Product:
            </label>
            <div className="relative w-full">
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
                ref={searchInputRef}
                className="w-full p-2 ps-10 text-sm text-gray-900 bg-gray-50 border focus:border-gray-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 10l5-5m-5 5l-5 5m5-5l-5-5m5 5l5 5"
                    />
                  </svg>
                </button>
              )}
            </div>
          </form>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className={`rounded-md py-2 px-4 transition text-sm ${
                category === "" ? "bg-orange-200" : "bg-slate-100"
              }`}
              onClick={() => setCategory("")}
            >
              Default
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-md py-2 px-4 transition text-sm ${
                  category === cat ? "bg-orange-200" : "bg-slate-100"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="products flex flex-wrap justify-evenly gap-y-16 gap-x-6 p-4">
        {filteredProducts &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

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
