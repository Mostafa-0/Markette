import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [cartBtns, setCartBtns] = useState({});
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products/");

  const filteredProducts = products?.filter((product) => {
    const matchesQuery = query
      ? product.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;
    return matchesQuery && matchesCategory;
  });

  const updateBtnText = (productId) => {
    setCartBtns((prev) => ({ ...prev, [productId]: "Added!" }));
    setTimeout(() => {
      setCartBtns((prev) => ({ ...prev, [productId]: "Add To Cart" }));
    }, 1000);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        error,
        isLoading,
        cartBtns,
        updateBtnText,
        query,
        setQuery,
        category,
        setCategory,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
