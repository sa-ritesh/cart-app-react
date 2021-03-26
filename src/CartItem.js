import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    handleDeleteProduct,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Price: {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            onClick={() => handleIncreaseQuantity(product)}
            src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
          />
          <img
            alt="decrease"
            className="action-icons"
            onClick={() => handleDecreaseQuantity(product)}
            src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
          />
          <img
            alt="delete"
            style={{ width: 30 }}
            onClick={() => {
              handleDeleteProduct(product);
            }}
            src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1616761965~hmac=8b3037b5b02ab15f2469dd6bc9c8335f"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
