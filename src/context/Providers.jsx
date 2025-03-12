import { CartContextProvider } from "./CartContext";
import { ProductContextProvider } from "./ProductContext";

function Providers({ children }) {
  return (
    <ProductContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ProductContextProvider>
  );
}

export default Providers;
