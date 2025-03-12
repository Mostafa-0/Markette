import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((accumulator, current) => {
          return accumulator + current.quantity * current.price;
        }, 0)
      );
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      setCartAmount(
        cart.reduce((accumulator, current) => {
          return accumulator + current.quantity;
        }, 0)
      );
    }
  }, [cart]);

  // Add to Cart
  const addToCart = (product, id) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.id === id);

      if (cartItem) {
        return prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: cartItem.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.id === id);
      if (cartItem) {
        return prevCart.map((item) => {
          if (item.id === id && cartItem.quantity > 1) {
            return { ...item, quantity: cartItem.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
