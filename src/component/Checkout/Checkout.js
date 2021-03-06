import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='Advertising' className='checkout__img' />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct product={item}></CheckoutProduct>
          ))}

          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal></Subtotal>
      </div>
    </div>
  );
};

export default Checkout;
