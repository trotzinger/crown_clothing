import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  useEffect(() => {
    //probably here will have some product listener for DB changes
    // then will setProducts as an event handler on that listener.
    // listener probably provided by firebase

    // do nothing on clean up,
    // remember useEffect runs the returned function on cleanup
    return () => null;
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
