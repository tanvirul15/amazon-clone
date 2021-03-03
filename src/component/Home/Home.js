import "./Home.css";
import React from "react";
import Product from "../Product/Product";
import fakeData from "../../fakeData";

const Home = () => {
  console.log(fakeData[0]);
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home__row">
          <Product title={fakeData[10].name} price={fakeData[10].price} image={fakeData[10].img} rating={fakeData[10].star} id={fakeData[10].key}></Product>
          <Product title={fakeData[25].name} price={fakeData[25].price} image={fakeData[25].img} rating={fakeData[25].star} id={fakeData[25].key}></Product>
        </div>
        <div className="home__row">
          <Product title={fakeData[11].name} price={fakeData[11].price} image={fakeData[11].img} rating={fakeData[11].star} id={fakeData[11].key}></Product>
          <Product title={fakeData[12].name} price={fakeData[12].price} image={fakeData[12].img} rating={fakeData[12].star} id={fakeData[12].key}></Product>
          <Product title={fakeData[13].name} price={fakeData[13].price} image={fakeData[13].img} rating={fakeData[13].star} id={fakeData[13].key}></Product>
        </div>
        <div className="home__row">
          <Product title={fakeData[44].name} price={fakeData[44].price} image={fakeData[44].img} rating={fakeData[44].star} id={fakeData[44].key}></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
