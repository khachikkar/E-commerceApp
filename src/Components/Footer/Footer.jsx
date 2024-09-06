import React from 'react'
import logo from "../../assets/images/logo.svg"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo cont">
        <img src={logo} alt="Logo" />
        <p>From Best to Best.</p>
      </div>
      <div className="menuu cont">
        <h4>Menu</h4>
        <ul>
            <li>Necklace</li>
            <li>Bracelet</li>
            <li>Ring</li>
            <li>Earring</li>
            <li>Crown</li>
            <li>Buckle</li>
        </ul>
      </div>

      <div className="help cont">
      <h4>Help</h4>
        <ul>
            <li>Help</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
            <li>Laws of RA</li>
        </ul>
      </div>

      <div className="subscribe cont">
        <h4>Subscribe</h4>
        <ul>
            <input type="text" placeholder='Subscribe' />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>(c) All rights Reserved. 2024</p>
        </ul>
      </div>

    </div>
  )
}

export default Footer
