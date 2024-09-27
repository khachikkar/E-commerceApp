import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";

import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { ShopContext } from "../../ShopContext";

const Nav = () => {

const {basket, fav} = useContext(ShopContext)


  const [active, setActive] = useState(null);

  const [icon, setIcon] = useState(false);

  const items = ["Shop", "Ring", "EarRing", "Necklace", "Bracelet", "Buckle", "Crown"];

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navlogo">
        <h1 onClick={() => navigate("/*")}>OrbiJew</h1>
      </div>
      <div className="navmenu">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(index)
                navigate(`/prodfiltered`, {state:{item}})
              }}
            
              className={active === index ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
        <span className="men">Menu</span>
      </div>
      <div className="navicons">
      {/* <button onClick={()=>navigate("/adminka")} className="abutton">Admin</button> */}
        <CiSearch
          onClick={() => setIcon(!icon)}
          className={icon ? "active" : ""}
          size={24}
        />
        <CiUser onClick={() => navigate("/register")} size={24} />
        {fav.length ? (
          <AiFillHeart
            onClick={() => navigate("/fav")}
            size={24}
            style={{ color: "red" }}
          />
        ) : (
          <CiHeart onClick={() => navigate("/fav")} size={24} />
        )}
        <div onClick={() => navigate("/cart")} className="cc">
          <CiShoppingCart size={24} />
          <div className="ccn">{basket.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
