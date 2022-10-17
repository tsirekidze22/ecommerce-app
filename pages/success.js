import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";
import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="description">
          If you have any questions, please email
          <a href="mailto:tsotnetsirekidze22@gmail.com" className="email">
            tsotnetsirekidze22@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            {" "}
            Continue Shippong
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
