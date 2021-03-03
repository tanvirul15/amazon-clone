import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = ({ title, image, price, rating, id }) => {
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push("⭐");
  }

  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          <p>{ratingArray}</p>
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
