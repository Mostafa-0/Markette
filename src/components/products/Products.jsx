import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ProductItem from "./ProductItem";
import SearchBar from "../ui/SearchBar";
import Loading from "../ui/Loading";

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
  } = useContext(ProductContext);
  const { pathname } = useLocation();

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

    setQuery("");
  }, [routeCategory, setCategory, setQuery]);

  return (
    <section id="shop" className="my-12">
      <h2>Products</h2>

      <div className="grid place-items-center">
        {error && <div className="text-center text-neutral-600">{error}</div>}
        {isLoading && <Loading />}
      </div>

      {!isLoading && !error && (
        <div className="grid gap-4 justify-center px-4 md:p-4 mb-8">
          <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearchSubmit={handleSearchSubmit}
          />
          {pathname == "/" && (
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className={`rounded-md py-2 px-4 transition text-sm border ${
                  category === "" ? "bg-primary/10 border-primary/15" : "bg-gray-100"
                }`}
                onClick={() => setCategory("")}
              >
                Default
              </button>
              {categories.map((categ) => (
                <button
                  key={categ}
                  className={`rounded-md py-2 px-4 transition text-sm border ${
                    category === categ
                      ? "bg-primary/10 border-primary/15"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setCategory(categ)}
                >
                  {categ}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="products grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProducts &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
      {!isLoading && !error && filteredProducts.length < 1 && (
        <div className="text-center mt-8 text-gray-500">
          No products found matching your search.
        </div>
      )}
    </section>
  );
}

export default Products;
