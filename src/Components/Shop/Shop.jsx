import React, { useContext } from 'react'
import Hero from '../Hero/Hero'
import ProductList from '../ProductList/ProductList'
import { ShopContext } from '../../ShopContext'


import jew from "../../../jew.json"

const Shop = () => {



const {data, addtocart, addtofav, delprod, filteredData} = useContext(ShopContext)

  return (
    <div className='shop'>
      {/* <br></br>
      <br />
      <br /> */}
    <Hero />
    <ProductList data={jew.jewelry} addtocart={addtocart} addtofav={addtofav} delprod={delprod}/>
    </div>
  )
}

export default Shop
