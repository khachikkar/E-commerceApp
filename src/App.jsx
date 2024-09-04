import "./App.css"
import Cart from "./Components/Cart/Cart"

import Nav from "./Components/Nav/Nav"

import { Routes, Route } from "react-router-dom"
import Shop from "./Components/Shop/Shop"

import { useState, useEffect } from "react"
import axios from "axios"
import Fav from "./Components/Fav/Fav"
import Register from "./Components/Register/Register"
import UserProfile from "./Components/UserProfile/UserProfile"
import ProductDescription from "./Components/ProductDescription/ProductDescription"
import Adminka from "./Components/Adminka/Adminka"
import ProductFiltered from "./Components/ProductFiltered/ProductFiltered"

function App() {


  const [data, setData] =useState([])

  const [basket, setBasket] = useState([])


const [fav, setFav] = useState([])

  useEffect(()=>{
      axios.get(`http://localhost:3003/jewelry`)
      .then(response => {
          console.log(response)
          setData(response.data)
      })
  },[])



// function to add a product in cart

const addtocart = product => {
  setBasket(prev=>{
    let found = prev.find(item=> item.id === product.id)
    if(!found){
      console.log("Added", basket)

      return[...prev,{...product, quantity: 1}]
    }
    console.log("Added",)

    return prev.map(item=> item.id === product.id ? {...item , quantity: item.quantity +1 } : item )
  })
}

// function to add a product in favlist

const addtofav = (data) => {
 setFav(prev=>{
  let found = prev.find(item=> item.id === data.id)
  if(!found){
    return [...prev, data] 
  }
  return prev.map(item=>item.id === data.id ? {...item} : item)
 })
};


// functions for admin pannel

const addprod = (prod, resetForm) =>{
  axios.post(`http://localhost:3003/jewelry`, prod).then(res=>{
    setData([...data, prod])
    resetForm()
  })

}

const delprod = (id, resetForm) =>{
  axios.delete(`http://localhost:3003/jewelry/${id}`)
  .then(
setData(data.filter(item=> item.id != id))

  )
  resetForm()
}




  return (
    
    <div>


<Nav basket={basket} fav={fav} />


    <Routes>

<Route path="/cart" element={<Cart basket={basket} setBasket={setBasket}  />}/>
<Route path="*" element={<Shop data={data} addtocart={addtocart} addtofav={addtofav}   delprod={delprod}  /> }/>
<Route path="/fav" element={<Fav fav={fav} addtocart={addtocart} />}/>
<Route path="/register" element={<Register />}/>
<Route path="/profile" element={<UserProfile mdata={data}  addtocart={addtocart} addtofav={addtofav} />}/>
<Route path="/prod" element={<ProductDescription addtocart={addtocart} />}/>
<Route path="/adminka" element={<Adminka addprod={addprod} delprod={delprod} />}/>
<Route path="/prodfiltered" element={<ProductFiltered data={data} />}/>
    </Routes>


    </div>
   
  )
}

export default App
