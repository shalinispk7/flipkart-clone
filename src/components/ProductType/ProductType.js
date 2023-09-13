import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProductType.css";
import { Link, useParams } from "react-router-dom";

const ProductType = () => {
  const { type } = useParams();
  console.log(type, "type");
  const [prodType, setProdType] = useState([]);

  const getData = async () => {
    axios
      .get("https://flipkart-scraper-api.dvishal485.workers.dev/search/" + type)
      .then(function (response) {
        // handle success
        setProdType(response.data.result);
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="product-type">
      <div className="container">
        <div className="product-type-row">
          {prodType.map((e, index) => {
            return (
              <Link
                to={
                  "/productdetails/enchanteur-romantic-shower-gel/p/itmf6yfs9fcsbgx4"
                }
              >
                <div className="product-type-col" key={index}>
                  <div className="pro-type-card">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductType;
