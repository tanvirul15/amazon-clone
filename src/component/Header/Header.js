import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-lineOne">Hello Guest</span>
          <span className="header__option-lineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne">Return</span>
          <span className="header__option-lineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne">Your</span>
          <span className="header__option-lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBusket">
            <ShoppingBasketIcon />
            <span className="header__option-lineTwo header__busketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
