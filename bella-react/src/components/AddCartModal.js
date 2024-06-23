import { useState } from "react";

function AddCartModal({ addCartModalContent, onAddToCart, onPageChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleClickAddToCart = () => {
    onAddToCart(addCartModalContent, quantity);
    setQuantity(1);
    onPageChange("cart");
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-centered">
        <div className="modal-content">
          <div className="modal-body">
            <img src={addCartModalContent.img} className="modal-img" />
            <div className="modal-desc">
              <h5 className="modal-item-name">{addCartModalContent.title}</h5>
              <p className="modal-item-desc">
                {addCartModalContent.description}
              </p>
              <h5 className="modal-item-price">${addCartModalContent.price}</h5>
              <div className="modal-input-container">
                <input
                  type="number"
                  className="modal-input"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  id="modalInput"
                />
              </div>
              <button
                className="btn btn-add-cart"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClickAddToCart}
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCartModal;
