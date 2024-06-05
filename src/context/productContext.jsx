import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const productContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [cartBtns, setCartBtns] = useState({});

  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products/");

  const updateBtnText = (productId) => {
    setCartBtns((prev) => ({ ...prev, [productId]: "Added!" }));
    setTimeout(() => {
      setCartBtns((prev) => ({ ...prev, [productId]: "Add To Cart" }));
    }, 1000);
  };
  return (
    <productContext.Provider
      value={{ products, error, isLoading, cartBtns, updateBtnText }}
    >
      {children}
    </productContext.Provider>
  );
};
