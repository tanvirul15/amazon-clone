import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = (props) => {
  const { name, img, price, star, key } = props.product;
  const ratingArray = [];
  for (let i = 0; i < star; i++) {
    ratingArray.push("⭐");
  }
  console.log(name, img, price, star, key);
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: key,
        title: name,
        image: img,
        price: price,
        rating: star,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{name}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          <p>{ratingArray}</p>
        </div>
      </div>
      <img src={img} alt='book' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
