import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

const Fav = ({fav, addtocart}) => {

    console.log(fav)
  return (
    <div className='favv'>
        <br />
        <br />
        <br />
        <h1>Favorite Products</h1>
        <div className="prods">
        {
        fav.map(item=>{
            return(
                <ProductItem key={item.id} item={item} addtocart={addtocart}/>
            )
        })
    }
        </div>
   
    </div>
  )
}

export default Fav