function Homepage({ products, onModalContentChange }) {
  return (
    <div className="products-container row mt-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="card md-3 position-relative"
          style={{ width: "18rem" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => onModalContentChange(product)}
        >
          {product.originalPrice ? (
            <span className="badge position-absolute">Sale</span>
          ) : (
            ""
          )}

          <img
            height="350rem"
            src={product.img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title my-2 align-center">{product.title}</h6>
            <p className="card-text">
              ${product.price}
              {product.originalPrice ? (
                <span className="discount">${product.originalPrice}</span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
