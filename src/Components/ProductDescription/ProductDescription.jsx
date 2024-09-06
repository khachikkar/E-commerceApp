import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../ShopContext";


const ProductDescription = () => {

const {addtocart}= useContext(ShopContext)

  const location = useLocation();
  const { item } = location.state || {};




  return (
    <div className="prdesc">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <h2>{item.name}</h2>
        <strong>{item.category} Number:{item.id}</strong>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={()=>addtocart(item)} className="pbutton">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDescription;
