import React from "react";
import "./productSection.css";
import prodSectionData from "./prodSectionData";

import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="container">
        <div className="product-sec-list">
          {prodSectionData.map((cv, index) => {
            return (
              <Link to={"/producttype/" + cv.name}>
                <div className="product" key={index}>
                  <div className="product-img">
                    <img src={cv.img} />
                  </div>
                  <span>{cv.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
