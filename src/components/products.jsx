import { useContext, useEffect } from "react";
import { productContext } from "../context/productContext";
import ProductItem from "./productItem";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";

function Products() {
  const { category: routeCategory } = useParams();
  const {
    error,
    isLoading,
    filteredProducts,
    category,
    setCategory,
    query,
    setQuery,
  } = useContext(productContext);

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur();
  };

  useEffect(() => {
    if (routeCategory) {
      setCategory(routeCategory);
    }
  }, [routeCategory, setCategory]);

  return (
    <section id="shop" className="my-12">
      <h2 className="text-center text-2xl md:text-3xl mb-4">
        Explore Our Products
      </h2>

      {error && <div>{error}</div>}
      {isLoading && <div className="text-center text-lg m-8">Loading...</div>}

      {!isLoading && !error && (
        <div className="flex flex-wrap gap-4 justify-around items-center px-4 md:p-4">
          <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearchSubmit={handleSearchSubmit}
          />
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
