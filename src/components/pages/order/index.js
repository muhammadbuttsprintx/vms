import React, { useEffect, useState } from "react";

import "../order/style.css";
import { columns, rows } from "./orderHelper";
import upArrow from "../../../icons/upArrow.svg";
import profile from "../../../icons/profile.svg";
import Hashtag from "../../../icons/hashtag.svg";
import deleteIcon from "../../../icons/deleteIcon.svg";
import edit from "../../../icons/edit.svg";

const Order = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = (id) => {
    if (toggle === id) {
      setToggle(null);
    } else {
      setToggle(id);
    }
  };
  
  return (
    <div className="wraper">
      <div className="col_wraper">
        {columns.map((col) => {
          return (
            <div className="col_items">
              <div style={{ borderRadius: "6px" }}>
                <span>
                  <b>{col.name}</b>
                </span>
                <span className="img_holder">
                  <img width={10} src={col.selectedIcon} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {rows.map((row) => {
        return (
          <>
            {toggle != row.order_no ? (
              <div className="row_wraper">
                <div
                  className="row_items"
                  onClick={() => clickHandler(row.order_no)}
                >
                  {row.order_no}
                </div>
                <div className="row_items">{row.date}</div>
                <div className="row_items">{row.client_id}</div>
                <div className="row_items">{row.name}</div>
                <div className="row_items">{row.vehicle_name}</div>
                <div className="row_items">{row.make}</div>
                <div className="row_items">{row.job_type}</div>
                <div className="row_items">{row.price}</div>
                <div className="row_items">{row.action}</div>
              </div>
            ) : (
              <div className="order_detail_wraper">
                <div className="order_detail_wraper">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="detail_header_left">
                      <img
                        width={25}
                        src={Hashtag}
                        style={{ marginRight: "4px" }}
                      />
                      <h5 onClick={() => clickHandler(row.order_no)}>
                        Order No. {row.order_no}
                      </h5>
                    </div>
                    <div className="detail_header_right">
                      <img width={25} src={profile} />
                      <h5 style={{ margin: "0px 5px" }}>{row.name}</h5>
                      <img
                        width={25}
                        src={upArrow}
                        style={{ marginRight: "17px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="order_detail_body">
                  <div className="col">
                    <p>
                      <b>Date</b>: {row.date}
                    </p>
                    <p>
                      <b>Client Name</b>: {row.name}
                    </p>
                    <p>
                      <b>Client Phone#</b>: 0809767857
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      <b>Vehicle#</b>:{row.vehicle_name}
                    </p>
                    <p>
                      <b>Vehicle Maker</b>:{row.make}
                    </p>
                    <p>
                      <b>Vehicle Model</b>:{row.vehicle_name}
                    </p>
                    <p>
                      <b>Vehicle Year</b>:{row.vehicle_name}
                    </p>
                    <p>
                      <b>Vehicle Color</b>:Black
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      <b>Job Type</b>: <span>Engine Repairment</span>
                    </p>
                    <p>
                      {" "}
                      <b>fault</b>:Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      <b>Labor Cost</b> : {row.price}
                    </p>
                    <p>
                      <b>Repairman</b>: {row.price}
                    </p>
                    <p>
                      <b>Add Item</b> : AC Pipe
                    </p>
                    <p>
                      <b>Quantity</b> : 1 piece
                    </p>
                  </div>
                  <div className="col">
                    <div
                      style={{
                        width: "100%",
                        position: "relative",
                        height: "100%",
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          right: "10px",
                          marginTop: "5px",
                        }}
                        src={edit}
                      />
                      <br />
                      <img
                        style={{
                          position: "absolute",
                          right: "10px",
                          marginTop: "20px",
                        }}
                        src={deleteIcon}
                      />
                      <br />
                      <button
                        style={{
                          position: "absolute",
                          right: "10px",
                          bottom: "15px",
                          background: "none",
                          border: "2px solid lightblue",
                          borderRadius: "5px",
                        }}
                      >
                        Print Receipt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Order;
