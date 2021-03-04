import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const { title, image, price, rating } = props.product;

  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push("⭐");
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='book' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title '>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          <p>{ratingArray}</p>
        </div>
        <button onClick={() => {}}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
