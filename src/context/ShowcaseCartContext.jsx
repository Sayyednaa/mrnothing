import React, { createContext, useContext, useState } from 'react';

const ShowcaseCartContext = createContext();

export const ShowcaseCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const triggerShowcaseModal = (product = null) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const closeShowcaseModal = () => {
    setIsModalOpen(false);
    setModalProduct(null);
  };

  const addToBag = (product) => {
    triggerShowcaseModal(product);
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ShowcaseCartContext.Provider
      value={{
        cart,
        cartCount,
        addToBag,
        isModalOpen,
        modalProduct,
        triggerShowcaseModal,
        closeShowcaseModal,
      }}
    >
      {children}
    </ShowcaseCartContext.Provider>
  );
};

export const useShowcaseCart = () => {
  const context = useContext(ShowcaseCartContext);
  if (!context) {
    throw new Error('useShowcaseCart must be used within a ShowcaseCartProvider');
  }
  return context;
};
