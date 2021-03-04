import "./Home.css";
import React from "react";
import Product from "../Product/Product";
import fakeData from "../../fakeData";

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

        <div className='home__row'>
          <Product product={fakeData[10]}></Product>
          <Product product={fakeData[25]}></Product>
        </div>
        <div className='home__row'>
          <Product product={fakeData[11]}></Product>
          <Product product={fakeData[12]}></Product>
          <Product product={fakeData[13]}></Product>
        </div>
        <div className='home__row'>
          <Product product={fakeData[44]}></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
