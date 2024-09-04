import React from "react";
import { useLocation } from "react-router-dom";


const ProductDescription = ({addtocart}) => {
  const location = useLocation();
  const { item } = location.state || {};




  return (
    <div className="prdesc">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <h2>{item.name}</h2>
        <strong>{item.category}</strong>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={()=>addtocart(item)} className="pbutton">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDescription;
