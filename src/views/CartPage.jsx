import React from "react";
import { useCart } from "../context/CartContext";
import "../assets/css/Cart.css"; 

const CartPage = () => {
  const { cart, updateQuantity, total } = useCart();

  return (
    <div className="cart">
      <h3>Detalles del pedido:</h3>
      <div className="items">
        {cart.map(({ id, img, name, price, count }) => (
          <div key={id} className="item">
            <img src={img} alt={name} className="item-img" />

            <div className="item-info">
              <span className="item-name">{name}</span>
              <span className="item-price">${price}</span>
            </div>

            <div className="item-actions">
              <button onClick={() => updateQuantity(id, -1)} className="menos-button"> 
                - 
              </button>
              <span className="item-count">{count}</span>
              <button onClick={() => updateQuantity(id, 1)}className="mas-button"> 
                + 
              </button>
            </div>

          </div>
        ))}
      </div>
      <div className="total">
        Total: ${total.toLocaleString("es-CL")}
      </div>
      <button className="pay-button"> Pagar </button>
    </div>
  );
};

export default CartPage;
   
    

