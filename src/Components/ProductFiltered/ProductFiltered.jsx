import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Shop from '../Shop/Shop';

const ProductFiltered = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
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
      <Shop data={filteredData} />
    </div>
  );
};

export default ProductFiltered;
