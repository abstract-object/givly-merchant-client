import React, {Component} from "react";

import SearchBar from "./SearchBar.js";
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cart: {}, 
      products: {
        1: {
          id: 1,
          image: "/icons/bread-1.png",
          name: "Generic bread",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        },
        2: {
          id: 2,
          image: "/icons/potatoes-2.png",
          name: "Generic potatoes",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        },
        3: {
          id: 3,
          image: "/icons/grapes.png",
          name: "Generic grapes",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        },
        4: {
          id: 4,
          image: "/icons/milk.png",
          name: "Generic milk",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        },
        5: {
          id: 5,
          image: "/icons/pear.png",
          name: "Generic pears",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        },
        6: {
          id: 6,
          image: "/icons/water-1.png",
          name: "Brand name water",
          category: "Food",
          price: 1,
          quantity: 0,
          hide: false
        }
      },
      totalPrice: 0,
      recipientBalance: null,
      status: null,
      loading: false
    };
  };

  searchFilter = keyword => {
    this.setState(prevState => {
      const products = Object.assign({}, prevState.products);

        for (let product in products) {
          products[product].hide = false;
        }
        if (keyword) {
        const hiddenProducts = Object.values(products).filter(product => !product.name.includes(keyword));
        
        hiddenProducts.forEach(product => {
          products[product.id].hide = true;
        });
      }

      return {products};
    });
  };

  changeCart = (id, add) => {
    this.setState(prevState => {
      const status = (prevState.status && prevState.status[0] === "cart") ? null : prevState.status;
      const cart = Object.assign({}, prevState.cart);
      let totalPrice = prevState.totalPrice;

      let amount = -1;
      
      if (add) {
        amount = 1;
      }

      cart[id] = this.state.products[id];

      if (cart[id].quantity) {
        cart[id].quantity += amount;
      } else if (add) {
        cart[id].quantity = 1;
      }

      if (!cart[id].quantity || cart[id].quantity <= 0) delete cart[id];

      totalPrice = this.updateTotalPrice(cart);
      
      return {cart, status, totalPrice};
    });
  };

  clearItem = id => {
    this.setState(prevState => {
      const cart = Object.assign({}, prevState.cart);
      let totalPrice = prevState.totalPrice;
      
      cart[id].quantity = 0;
      delete cart[id];
      totalPrice = this.updateTotalPrice(cart);

      return {cart, totalPrice};
    });
  };

  clearCart = () => {
    this.setState(prevState => {
      let cart = Object.assign({}, prevState.cart);

      Object.values(cart).forEach(item => {
        item.quantity = 0;
        item.price = 1;
      });

      const totalPrice = this.updateTotalPrice(cart);

      cart = {};

      return {cart, totalPrice};
    });
  };

  changePrice = (id, add) => {
    this.setState(prevState => {
      const cart = Object.assign({}, prevState.cart);
      let totalPrice = prevState.totalPrice;

      let amount = -1;
      
      if (add) {
        amount = 1;
      }

      let newPrice = cart[id].price + amount;
      if (newPrice < 1) newPrice = 1;
      cart[id].price = newPrice;

      totalPrice = this.updateTotalPrice(cart);
      
      return {cart, totalPrice};
    });
  };

  displayBalance = recipientId => {
    if (recipientId) {
      const options = {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `recipientCryptoId=${recipientId}`,
        mode: "cors"
      };
  
      fetch(`${this.props.host}/merchant/verifyAccount`, options)
      .then((response) => {
        console.log(response)
        response.json()
        .then(data => {
          if (data.balance !== null && !isNaN(data.balance)) {
            this.setState({recipientBalance: data.balance});
          } else {
            this.setState({recipientBalance: null});
          }
        })})
      .catch(err => {this.setState({loading: false, status: ["error", "Failed to get recipient balance."]})});
    } else {
      this.setState({recipientBalance: null});
    }
  };

  addTransaction = recipientId => {
    if (!recipientId) {
      this.setState({status: ["error", "Failed to add transaction. Invalid recipient id."]});
      return null;
    }

    this.setState({loading: true});

    const options = {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `recipientCryptoId=${recipientId}`,
      mode: "cors"
    };

    fetch(`${this.props.host}/merchant/verifyAccount`, options)
    .then((response) => {
      response.json()
      .then(data => {
        this.setState({recipientBalance: data.balance});
        if (this.state.totalPrice > 0 && this.state.recipientBalance >= this.state.totalPrice) {
          const transaction = {
            totalPrice: this.state.totalPrice,
            merchantUuid: this.props.merchant.id,
            merchantCryptoId: this.props.merchant.cryptoId,
            recipientCryptoId: recipientId,
            products: []
          };
      
          Object.values(this.state.cart).forEach(cartItem => {
            transaction.products.push({
              productName: cartItem.name,
              price: cartItem.price * cartItem.quantity
            });
          });
      
          options.body = `transaction=${JSON.stringify(transaction)}`;

          fetch(`${this.props.host}/transaction/submitTx`, options)
          .then(response => {
            console.log(response)
            response.json()
            .then(data => {
              console.log(data)
              this.clearCart();
              this.setState({loading: false, status: ["cart", "Thank you, order successfully processed."]});
              this.displayBalance(recipientId);
            })
            .catch(err => {this.setState({loading: false, status: ["error", "Failed to add transaction."]})});
          });
        } else {
          this.setState({loading: false, status: ["error", `Failed to add transaction. Recipient's current balance is below the total price of these items.`]});
        }
      })
      .catch(err => {this.setState({loading: false, status: ["error", "Failed to get recipient balance."]})});
    })
    .catch(err => console.log(err));
  };

  updateTotalPrice = cart => {
    return Object.values(cart).reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  };

  render() {
    return (
      <div className="merchant-portal">
          <SearchBar search={this.searchFilter}/>
          <main>
            <section id="products-column">
              <ProductList products={this.state.products} changeCart={this.changeCart}/>
            </section>
            <section id="cart-column">
              {(this.state.totalPrice > 0 || this.state.loading || this.state.status) && <Cart cart={this.state.cart} totalPrice={this.state.totalPrice} changePrice={this.changePrice} addTransaction={this.addTransaction} loading={this.state.loading} status={this.state.status} displayBalance={this.displayBalance} balance={this.state.recipientBalance} clearItem={this.clearItem}/>}
            </section>
          </main>
      </div>
    );
  };
};

export default Dashboard;