import React, { useState } from "react";
import "./layout.css";
import profileDownArrow from "../../../icons/profileDownArrow.svg";
import car from "../../../icons/car.jpg";
import { FaBeer } from "react-icons/fa";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="icon">
        <h3>Vehicle Management</h3>
      </div>
      <div className="search_box" style={{ display: `${!toggle}?block:none` }}>
        <input className="input_search" type={"search"} placeholder="search" />
      </div>
      <div className="profile_wraper">
        <img className="profileImg" width={30} height={30} src={car} />
        <div>
          <span className="profileName">Name</span>
          <img className="profile_down_arrow" src={profileDownArrow} />
        </div>
      </div>
      <div className="mobile_icon">
        <FaBeer
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
