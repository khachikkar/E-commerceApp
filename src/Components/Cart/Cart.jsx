import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../ShopContext";

// optimalacnenq basket i canr hashvarky //
import { useMemo } from "react";


const Cart = () => {

const {basket, setBasket} = useContext(ShopContext)


const _tax = 5

const [tot, setTot] = useState(0)
const [subtot, setSubtot] = useState(0)


const total = useMemo(()=>{
  return basket.reduce((acc, item) => acc + item.price * item.quantity, 0)
},[basket])


useEffect(()=>{



  setSubtot(total)
  console.log(total)
  setTot(total + (total * _tax / 100))

}, [basket])


const increment = id =>{
setBasket(prev=> prev.map(item=> item.id === id ? {...item, quantity: item.quantity+1} : item))
}

const decrement = id =>{
  setBasket(prev=> prev.map(item=> item.id === id ? {...item, quantity: item.quantity-1 || 1} : item))
  }


  const remove = id =>{
    setBasket(prev=> prev.filter(item=> item.id != id))
    }


  return (
    <div className="cart">
      <h1>My Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {basket.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td><img src={item.image} alt="pp" /></td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price * item.quantity}</td>
                <td >
                  <div className="bb">
                  <button onClick={()=>decrement(item.id)} className="abtn mns">-</button>
                  <button onClick={()=>increment(item.id)}  className="abtn pls">+</button>
                  <button onClick={()=>remove(item.id)}  className="abtn rmv">X</button>
                  </div>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="i">
          
         <div className="subt">
          <h2>Subtotal:</h2>
          <h3>${subtot}</h3>
         </div>

         <div className="subt">
<div className="g">
<h2>Tax:</h2>
<p>Taxes are appled by <strong>Republic of Armenia</strong> laws, terms and conditions.</p>
</div>
<h3>{_tax}%</h3>
         </div>

         <div className="subt">
          <h2>Total:</h2>
          <h3>${tot.toFixed(2)}</h3>
         </div>

         <button className="pbutton">Purchase</button>
      </div>
    </div>
  );
};

export default Cart;
