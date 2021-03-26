import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Phone",
          price: 999,
          qty: 1,
          img: "",
        },
        {
          title: "Rudra",
          price: 999,
          qty: 1,
          img: "",
        },
        {
          title: "Papa",
          price: 999,
          qty: 1,
          img: "",
        },
      ],
    };
  }
  increaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products,
    });
  };
  decreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products,
    });
  };
  deleteProduct = (product) => {
    const { products } = this.state;
    const items = products.filter((item) => item != product);
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              handleIncreaseQuantity={this.increaseQuantity}
              handleDecreaseQuantity={this.decreaseQuantity}
              handleDeleteProduct={this.deleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
