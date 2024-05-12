import React from "react";
import Modal from "../UI/Modal.js";
import "./Cart.css";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        {props.candyCartData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <div style={{ display: "flex", gap: "10px" }}>
          <span>Total Amount</span>
          <span>{props.totalAmount}</span>
        </div>
        <div>
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
