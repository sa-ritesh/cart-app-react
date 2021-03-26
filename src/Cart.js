import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products, totalPrice } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            handleIncreaseQuantity={props.handleIncreaseQuantity}
            handleDecreaseQuantity={props.handleDecreaseQuantity}
            handleDeleteProduct={props.handleDeleteProduct}
          />
        );
      })}
      <div>Total Price: {totalPrice}</div>
    </div>
  );
};
export default Cart;
