import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push("⭐");
  }
  console.log(rating);
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          <p>{ratingArray}</p>
        </div>
      </div>
      <img src={image} alt='book' />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
