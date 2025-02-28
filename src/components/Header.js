import { useState } from "react";
import {headerimageurl} from "../utils/imageurl";
import { useState } from "react";


export const Header = () => {
  const [loginapp , setloginapp] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo-image"
            src={headerimageurl}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              loginapp === "Login"? setloginapp("Logout"): setloginapp("Login");
            }}>{loginapp}</button>
          </ul>
        </div>
      </div>
    );
  };