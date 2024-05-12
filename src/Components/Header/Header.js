import CartButton from "./CartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="name">Candy Shop</h1>
      <CartButton
        onShowCart={props.onShowCart}
        numberOfCartItem={props.numberOfCartItem}
      />
    </div>
  );
};
export default Header;
