import React, {Component} from "react";

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      this.props.hideItem || 
      (<article className="product">
      <header>
        <img alt={product.name} src={product.image}/>
      </header>
      <footer>
        <span><h5>{product.name}</h5></span>
        <span>
          <button onClick={this.handleChangeCart}>+</button>
          <span> Quantity </span>
          <button onClick={this.handleChangeCart}>-</button>
        </span>
        <p>Price: {product.price} Giv{product.price > 1 && "s"}</p>
      </footer>
    </article>)
    );
  };

  handleChangeCart = event => {
    let add = true;
    if (event.target.innerHTML === "-") add = false;

    this.props.changeCart(this.props.product.id, add);
  };
};

export default Product;