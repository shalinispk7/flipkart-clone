import React, { useState, useEffect } from "react";
import "./productList.css";
import axios from "axios";

const ProductList = () => {
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    console.log("compound did mount");
    getPost();
  }, []);
  const getPost = async () => {
    axios
      .get("https://flipkart-scraper-api.dvishal485.workers.dev/search/")
      .then(function (response) {
        // handle success
        setProdList(response.data.result);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  // const ProductListData = [
  //   {
  //     img: "https://rukminim2.flixcart.com/image/612/612/ksnjp8w0/toothpaste/b/1/m/red-ayurvedic-dabur-original-imag668fyqzq7ebz.jpeg?q=70",
  //     name: "Dabur Red Toothpaste",
  //     current_price: 355,
  //     original_price: 508,
  //     discounted: true,
  //   },
  // ];
  return (
    <section className="product-list">
      <div className="container">
        <div className="product-row">
          {prodList.map((e, index) => {
            return (
              <div className="product-col" key={index}>
                <div className="pro-card">
                  <div className="product-list-img">
                    <img src={e.thumbnail} />
                  </div>
                  <p>{e.name}</p>
                  <div>
                    <span>₹{e.current_price} </span>
                    <span> ₹{e.original_price}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {ProductListData.map((e, index) => {
            return (
              <div className="product-col" key={index}>
                <div className="product-list-img">
                  <img src={e.img} />
                </div>
                <p>{e.name}</p>
                <p>Rs.{e.current_price}</p>
                <p>Rs.{e.original_price}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
