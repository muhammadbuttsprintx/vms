import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  const items = [
    {
      key: "home",
      name: "HOME",
    },
    {
      key: "order",
      name: "ORDER",
    },
    {
      key: "employee",
      name: "EMPLOYEES",
    },
    {
      key: "finance",
      name: "FINANCE",
    },
    {
      key: "inventry",
      name: "INVENTRY",
    },
    {
      key: "customer",
      name: "CUSTOMER",
    },
    {
      key: "service",
      name: "SERVICE",
    },
    {
      key: "setting",
      name: "SETTING",
    },
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    if (id === toggle) {
      setToggle(null);
    } else {
      setToggle(id);
    }
  };
  return (
    <>
      <div class="nav-container">
        <ul class="nav">
          {items.map((item) => {
            return (
              <>
                <li
                  class={item.key === toggle ? "active_class" : "null"}
                  onClick={() => handleToggle(item.key)}
                >
                  <NavLink to={`/${item.key}`}>
                    <a>
                      <span class="icon-home"></span>

                      <span class="text">{item.name}</span>
                    </a>
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
