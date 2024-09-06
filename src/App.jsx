import "./App.css";
import Cart from "./Components/Cart/Cart";

import Nav from "./Components/Nav/Nav";

import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Fav from "./Components/Fav/Fav";
import Register from "./Components/Register/Register";
import UserProfile from "./Components/UserProfile/UserProfile";
import ProductDescription from "./Components/ProductDescription/ProductDescription";
import Adminka from "./Components/Adminka/Adminka";
import ProductFiltered from "./Components/ProductFiltered/ProductFiltered";
import { ShopContext } from "./ShopContext";
import Footer from "./Components/Footer/Footer";

function App() {
  const { data, setData } = useContext(ShopContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/jewelry`)
      .then((response) => {
        console.log("Response:", response);
        setData(response.data); // This updates the data in the context
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Data is now:", data); // Logs data when it changes
  }, [data]); // Dependency on data

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={data.length > 0 ? <Shop /> : <p>loading...</p>}
        />
        <Route path="/fav" element={<Fav />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/prod" element={<ProductDescription />} />
        <Route path="/adminka" element={<Adminka />} />
        <Route path="/prodfiltered" element={<ProductFiltered />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
