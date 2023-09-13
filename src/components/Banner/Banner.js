import React from "react";
import "./banner.css";
import banner from "../../assets/image/banner1.webp";

const Banner = () => {
  return (
    <section className="banner-sec">
      <div className="container">
        <div>
          <img src={banner} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
