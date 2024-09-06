import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Shop from '../Shop/Shop';
import { ShopContext } from '../../ShopContext';

const ProductFiltered = () => {


const {data, filteredData, setFilteredData} = useContext(ShopContext)



  const location = useLocation();
  const { item } = location.state || {};

  useEffect(() => {
    if (item !== "Shop") {
        const newData = data.filter((el) => el.category.toLowerCase() === item.toLowerCase());
        setFilteredData(newData);
      }else{
        setFilteredData(data);
      }
  }, [item, data]); // Dependency array ensures the effect runs when 'item' or 'data' changes

  return (
    <div>
      <Shop  />
    </div>
  );
};

export default ProductFiltered;
