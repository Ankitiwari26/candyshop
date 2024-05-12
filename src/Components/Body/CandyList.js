const CandyList = ({ candies, addToCartHandler }) => {
  return (
    <div>
      <h2>Candy List</h2>
      {candies.map((candie, index) => (
        <div key={index} style={{ display: "flex", gap: "10px" }}>
          <div style={{ padding: "2px", display: "flex", gap: "10px" }}>
            <div>{candie.name}</div>
            <div>{candie.description}</div>
            <div>{candie.price}</div>
          </div>
          <button onClick={() => addToCartHandler(candie, 1)}>Buy 1</button>
          <button onClick={() => addToCartHandler(candie, 2)}>Buy 2</button>
          <button onClick={() => addToCartHandler(candie, 3)}>Buy 3</button>
        </div>
      ))}
    </div>
  );
};

export default CandyList;
