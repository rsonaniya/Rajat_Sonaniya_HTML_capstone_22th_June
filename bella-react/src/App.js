import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import AddCartModal from "./components/AddCartModal";
import BuyNowModal from "./components/BuyNowModal";
const products = [
  {
    id: 1,
    title: "Women Solid Jacket",
    price: 50.0,
    originalPrice: 75.0,
    img: "./assets/img1.webp",
    description:
      "Travel jackets are taking over along with print jackets in the latest blue jackets for women summer wear. Bluetyga has navy jackets for stylish women with a flattering fit & cut. ",
  },
  {
    id: 2,
    title: "Medium 30 L Laptop Backpack",
    price: 29.0,
    img: "./assets/img2.webp",
    description:
      "Introducing the Amazon Basics Laptop Bag, equipped with 2 spacious main multi compartments with many hidden pockets and a mesh bottle holder on either side.",
  },
  {
    id: 3,
    title: "UV Protection Sunglasses",
    price: 55.0,
    originalPrice: 99,
    img: "./assets/img3.webp",
    description:
      "The John Jacobs collection features some of the most stylish and trendy sunglasses for men and women. Available in a variety of colours and shapes, it ensures you always stand out with your unique style.",
  },
  {
    id: 4,
    title: "Solid Sports/Regular Cap",
    price: 19.95,
    img: "./assets/img4.webp",
    description:
      "In every outfit or attire, fit is always a part of comfort. That’s why we’ve designed this snapback hat with an adjustable closure so it’s snug whenever you wear it",
  },
];
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [addCartModalContent, setAddCartModalContent] = useState({});

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGotoHome = () => {
    setCurrentPage("home");
  };

  const handleAddCartModalContent = (content) => {
    setAddCartModalContent(content);
  };

  const handleAddToCart = (product, quantity) => {
    const updatedProduct = { ...product, quantity: quantity * 1 };

    const foundItem = cartItems.find((item) => item.id === updatedProduct.id);

    if (foundItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === foundItem.id) {
          item.quantity += quantity * 1;
          item.total = item.quantity * item.price;
          return item;
        }
        return item;
      });
      setCartItems(newCartItems);
    } else {
      updatedProduct.total = updatedProduct.quantity * updatedProduct.price;
      setCartItems([...cartItems, updatedProduct]);
    }
    toast.success("Product Added to the cart");
  };

  const handleCartItemIncrease = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
        return item;
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const handleCartItemDecrease = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.total = item.price * item.quantity;
          return item;
        }
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const handleDeleteFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleBuyNow = () => {
    toast.success("Congratulation! Order Placed");
    setCurrentPage("home");
    setCartItems([]);
  };
  return (
    <div>
      <Navbar
        onPageChange={handlePageChange}
        handleGotoHome={handleGotoHome}
        currentPage={currentPage}
      />
      <ToastContainer position="top-right" />
      {currentPage === "home" && (
        <Homepage
          products={products}
          onModalContentChange={handleAddCartModalContent}
        />
      )}
      {currentPage === "cart" && (
        <Cartpage
          cartItems={cartItems}
          onIncreaseItem={handleCartItemIncrease}
          onDecreaseItem={handleCartItemDecrease}
          onDeleteItem={handleDeleteFromCart}
        />
      )}
      <AddCartModal
        addCartModalContent={addCartModalContent}
        onAddToCart={handleAddToCart}
        onPageChange={handlePageChange}
      />
      <BuyNowModal onBuyNow={handleBuyNow} />
    </div>
  );
};

export default App;
