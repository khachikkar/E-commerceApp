import React from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data); // Update filteredData when data changes
  }, [data]);

  // function to add a product in cart

  const addtocart = (product) => {
    setBasket((prev) => {
      let found = prev.find((item) => item.id === product.id);
      if (!found) {
        console.log("Added", basket);

        return [...prev, { ...product, quantity: 1 }];
      }
      console.log("Added");

      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  // function to add a product in favlist

  const addtofav = (data) => {
    setFav((prev) => {
      let found = prev.find((item) => item.id === data.id);
      if (!found) {
        return [...prev, data];
      }
      return prev.map((item) => (item.id === data.id ? { ...item } : item));
    });
  };

  // functions for admin pannel

  const addprod = (prod, resetForm) => {
    axios.post(`http://localhost:3003/jewelry`, prod).then((res) => {
      setData([...data, prod]);
      resetForm();
    });
  };

  const delprod = (id, resetForm) => {
    axios
      .delete(`http://localhost:3003/jewelry/${id}`)
      .then(setData(data.filter((item) => item.id != id)));
    resetForm();
  };

  const ShopContextValue = {
    basket,
    setBasket,
    data,
    setData,
    fav,
    setFav,
    addtocart,
    filteredData,
    setFilteredData,
    addtofav,
    addprod,
    delprod,
  };

  return (
    <ShopContext.Provider value={ShopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
