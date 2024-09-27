import React from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Shop from '../Shop/Shop';
import { ShopContext } from '../../ShopContext';



const UserProfile = () => {

const {data, addtocart, addtofav} = useContext(ShopContext)

    const location = useLocation()
    const {dataa} = location.state || {}

    console.log(dataa)


  return (
    <div className='prof'>
      <h1>Welcome, Dear {dataa.username}</h1>
      <Shop data={data} addtocart={addtocart} addtofav={addtofav}/>
      {/* Display user information here */}
    </div>
  );
};

export default UserProfile;
