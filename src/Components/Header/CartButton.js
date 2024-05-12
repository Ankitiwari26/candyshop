import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButton = (props) => {
  return (
    <button className="cart_button" onClick={props.onShowCart}>
      <h2 className="cart">Cart</h2>
      <ShoppingCartIcon className="cart_icon" />
      <div className="item_count">{props.numberOfCartItem}</div>
    </button>
  );
};

export default CartButton;
