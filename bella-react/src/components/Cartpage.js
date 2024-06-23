function Cartpage({ cartItems, onIncreaseItem, onDecreaseItem, onDeleteItem }) {
  return (
    <>
      <h5 className="cart-header my-4">Shopping Cart Summary</h5>
      <table className="table cart-table">
        <thead>
          <tr>
            <th colSpan="3">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="delete-cart" onClick={() => onDeleteItem(item.id)}>
                ❌
              </td>
              <td>
                <img src={item.img} width="20px" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td className="cart-input-container">
                <button className="btn" onClick={() => onIncreaseItem(item.id)}>
                  +
                </button>
                <span>{item.quantity}</span>
                <button className="btn" onClick={() => onDecreaseItem(item.id)}>
                  -
                </button>
              </td>
              <td>${item.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th colSpan="1">Total</th>
            <th></th>
            <td colSpan="1">
              ${cartItems.reduce((total, num) => total + num.total, 0)}
            </td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <button
                data-bs-toggle="modal"
                data-bs-target="#buyNowModal"
                className="btn btn-buy"
              >
                Procceed To Buy
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
      `;
    </>
  );
}

export default Cartpage;
