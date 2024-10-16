
import ProductItem from '../ProductItem/ProductItem'
import PropertyTypes from "prop-types"


import jew from "../../../jew.json"


const ProductList = ({data, addtocart, addtofav, delprod}) => {

console.log(jew.jewelry)


  return (
    <div className='prodlist'>
      <h1>Trending Products</h1>
      <div className="prods">

      {
        jew.jewelry.map(item =>{
            return (
                <ProductItem key={item.id} item={item} addtocart={addtocart} addtofav={addtofav}/>
            )
        } )
      

         
        // data.map(item =>{
        //     return (
        //         <ProductItem key={item.id} item={item} addtocart={addtocart} addtofav={addtofav}  />
        //     )
        // } )
      }
      </div>
    </div>
  )
}


ProductItem.PropertyTypes = {
  data:PropertyTypes.shape({
      id: PropertyTypes.number.isRequired,
      name:PropertyTypes.string.isRequired,
      price: PropertyTypes.oneOfType([PropertyTypes.string, PropertyTypes.number]),
      image: PropertyTypes.string
  }
  ),
  addtocart: PropertyTypes.func,
  addtofav: PropertyTypes.func
  }



export default ProductList
