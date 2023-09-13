import React from "react";

// import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import ProductSection from "../ProductSection/ProductSection";
import Banner from "../Banner/Banner";
// import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <ProductSection />
      <Banner />
      <ProductList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
