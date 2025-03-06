import { useState } from "react";
import {headerimageurl} from "../utils/imageurl";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
  const [loginapp , setloginapp] = useState("Login");

  const onlineStatus =  useOnlineStatus();
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
        <li >onlineStatus : {onlineStatus? "green": "red"}</li>
        <li><Link to ="/">Home</Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to ="/contacts">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              loginapp === "Login"? setloginapp("Logout"): setloginapp("Login");
            }}>{loginapp}</button>
          </ul>
        </div>
      </div>
    );
  };