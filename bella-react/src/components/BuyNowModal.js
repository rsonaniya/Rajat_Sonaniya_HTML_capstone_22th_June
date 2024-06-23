import { toast } from "react-toastify";

function BuyNowModal({ onBuyNow }) {
  return (
    <div
      className="modal fade"
      id="buyNowModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-centered">
        <div className="modal-content">
          <div className="modal-body model-body-buynow">
            <div className="modal-buynow-header">
              <p>Place Your Order</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <input
              className="modal-buynow-input"
              placeholder="Phone"
              type="number"
            />
            <input className="modal-buynow-input" placeholder="First name" />
            <input className="modal-buynow-input" placeholder="Last name" />
            <input className="modal-buynow-input" placeholder="Address" />
            <input className="modal-buynow-input" placeholder="Email" />
            <button
              data-bs-dismiss="modal"
              className="btn btn-buy btn-buynow-modal"
              onClick={onBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNowModal;
