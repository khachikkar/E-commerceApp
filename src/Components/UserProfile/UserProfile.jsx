import React from 'react';
import { useLocation } from 'react-router-dom';
import Shop from '../Shop/Shop';



const UserProfile = ({mdata, addtocart, addtofav}) => {

    const location = useLocation()
    const {data} = location.state || {}

    console.log(data)


  return (
    <div className='prof'>
      <h1>Welcome, Dear {data.username}</h1>
      <Shop data={mdata} addtocart={addtocart} addtofav={addtofav}/>
      {/* Display user information here */}
    </div>
  );
};

export default UserProfile;
