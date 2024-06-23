import React from "react";

const Navbar = ({ onPageChange, handleGotoHome, currentPage }) => {
  const handleClick = () => {
    onPageChange(currentPage === "home" ? "cart" : "home");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-brand header-logo btn"
          onClick={handleGotoHome}
        >
          Bella
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item mx-4">
              <button
                className="nav-link active btn"
                aria-current="page"
                onClick={handleGotoHome}
              >
                Home
              </button>
            </li>

            <li className="nav-item dropdown mx-4">
              <button
                className="nav-link active dropdown-toggle btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item btn">Action</button>
                </li>
                <li>
                  <button className="dropdown-item btn">Another action</button>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <button className="nav-link active btn">Favourites</button>
            </li>
            <li className="nav-item mx-4">
              <button className="nav-link active btn">Orders</button>
            </li>
            <li className="nav-item mx-4">
              <button className="nav-link active btn">Contact</button>
            </li>
          </ul>
          <div className="header-right">
            <span className="mx-4">Profile</span>
            <span className="cart-icon" onClick={handleClick}>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
