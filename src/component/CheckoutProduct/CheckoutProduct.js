import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const { id, title, image, price, rating } = props.product;
  const [{ basket }, dispatch] = useStateValue();
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push("⭐");
  }
  const removeFromBusket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

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
        <button onClick={removeFromBusket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
