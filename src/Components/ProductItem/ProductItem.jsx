import React from 'react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const ProductItem = ({ item, addtocart, addtofav, delprod }) => {


    const [isFilled, setIsFilled] = useState(false);

  const HeartIcon = ({ addtofav }) => {


    return (
      <div onClick={handleClick}>
        {isFilled ? (
          <AiFillHeart className="heart" size={32} style={{ color: 'red' }} />
        ) : (
          <AiOutlineHeart className="heart" size={32} />
        )}
      </div>
    );
  };


  const handleClick = () => {
    console.log('Heart clicked!'); // Debugging line
    setIsFilled(!isFilled);
    if (addtofav) {
      console.log('Adding to fav:', item); // Debugging line
      addtofav(item);
    } else {
      console.error('addtofav is not defined'); // Debugging line
    }
  };

  const navigate = useNavigate();


  return (
    <div className='pr'>
      <HeartIcon addtofav={addtofav} />
      <div className="imagee">
        <img onClick={()=> navigate('/prod', {state:{item}})} className='image ia' src={item.image} alt="" />
      </div>
      <br />
      <p className='tt'>{item.name}</p>
      <p className='pp'>${item.price}</p>
      <button onClick={() => addtocart(item)} className='sbutton prb'>add to cart</button>
      {/* <button onClick={()=>delprod(item.id)}>delate</button> */}
    </div>
  );
};

export default ProductItem;
