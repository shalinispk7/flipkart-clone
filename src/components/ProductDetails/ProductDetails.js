import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { detail } = useParams();
  const [prodDetail, setProdDetail] = useState([]);

  const getDetails = async () => {
    axios
      .get(
        "https://flipkart-scraper-api.dvishal485.workers.dev/search/product" +
          detail
      )
      .then(function (response) {
        console.log(response);
        setProdDetail(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <section>
      <div>
        {prodDetail.map((e, index) => {
          <div key={index}>
            <p>{e.name}</p>
          </div>;
        })}
      </div>
    </section>
  );
};

export default ProductDetails;

//"https://flipkart-scraper-api.dvishal485.workers.dev/product/enchanteur-romantic-shower-gel/p/itmf6yfs9fcsbgx4?pid=BWSG3TSEHHQVBHFT"
