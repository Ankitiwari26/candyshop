import React, { useState } from "react";
import Body from "./Components/Body/Body";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [candyCartData, setCandyCartData] = useState([]);
  const [numberOfCartItem, setNumberOfCartItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addToCartHandler = (candy, quantity) => {
    console.log(candy, quantity, "ankit2222");
    const existingIndex = candyCartData.findIndex(
      (item) => item.id === candy.id
    );
    if (existingIndex !== -1) {
      const updatedCart = [...candyCartData];
      updatedCart[existingIndex].quantity += quantity;
      setCandyCartData(updatedCart);
    } else {
      setCandyCartData([...candyCartData, { ...candy, quantity }]);
    }

    const newTotalAmount = totalAmount + candy.price * quantity;
    setTotalAmount(newTotalAmount);

    const newNumberOfCartItem = numberOfCartItem + quantity;
    setNumberOfCartItem(newNumberOfCartItem);
  };

  return (
    <div className="App">
      <Header
        onShowCart={showCartHandler}
        numberOfCartItem={numberOfCartItem}
      />
      <Body
        setCandyCartData={setCandyCartData}
        addToCartHandler={addToCartHandler}
      />
      {cartIsShown && (
        <Cart
          onClose={hideCartHandler}
          candyCartData={candyCartData}
          totalAmount={totalAmount}
        />
      )}
    </div>
  );
}

export default App;
