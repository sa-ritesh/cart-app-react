import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
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
  countProducts = () => {
    const { products } = this.state;
    let ans = 0;
    products.forEach((item) => {
      ans += item.qty;
    });
    return ans;
  };
  getTotalPrice = () => {
    const { products } = this.state;
    let ans = 0;
    products.forEach((item) => {
      ans += item.price * item.qty;
    });
    return ans;
  };
  render() {
    return (
      <div>
        <Navbar count={this.countProducts()} />
        <Cart
          products={this.state.products}
          handleIncreaseQuantity={this.increaseQuantity}
          handleDecreaseQuantity={this.decreaseQuantity}
          handleDeleteProduct={this.deleteProduct}
          totalPrice={this.getTotalPrice()}
        />
      </div>
    );
  }
}

export default App;
