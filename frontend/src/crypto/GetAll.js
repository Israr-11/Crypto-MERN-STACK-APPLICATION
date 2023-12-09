import React, { useEffect, useState } from "react";
// import Wrapper from './Wrapper'
import HomePage from "../components/HomePage";
//import { Link } from 'react-router-dom'
import Star from "../components/star";
//import { useNavigate } from 'react-router-dom'
import { FaBitcoin } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import { BiBitcoin } from "react-icons/bi";
import { IoLogoUsd } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiBinance } from "react-icons/si";

const icons = {
  FaBitcoin: FaBitcoin,
  FaBtc: FaBtc,
  SiBitcoinsv: SiBitcoinsv,
  BiBitcoin: BiBitcoin,
  IoLogoUsd: IoLogoUsd,
  FaEthereum: FaEthereum,
  SiDogecoin: SiDogecoin,
  SiBinance: SiBinance,
};

function GetAll() {
  const [coin, setBitCoin] = useState([]);

  //Fetching Data from the database
  useEffect(() => {
    fetch("http://localhost:9000/bitcoin")
      .then((res) => res.json())
      .then((data) => setBitCoin(data));
  }, []);
  return (
    <div>
      {/* <Wrapper /> */}
      <HomePage Heading="Search" />
      {coin.map((p) => {
        const Icon = icons[p.bit_coin_icon];
        return (
          <div className="productA" key={p._id}>
            <div className="product__nameA">
              <div className="inside_classA">
                <Star
                  p={p}
                  bit_coin_name={p.bit_coin_name}
                  bit_coin_count={p.bit_coin_count}
                  bit_coin_icon={p.bit_coin_icon}
                  bit_coin_abbreviation={p.bit_coin_abbreviation}
                  reminder_price={p.reminder_price}
                  actual_price={p.actual_price}
                  change_price={p.change_price}
                  desired_price={p.desired_price}
                />
                {Icon && <Icon />}
                <div className="inside_class_twoA">
                  <p>{p.bit_coin_name}</p>
                  {p.bit_coin_count} {p.bit_coin_abbreviation}
                </div>
              </div>
            </div>

            <div className="product__reminder-priceA">
              <p>{p.reminder_price}</p>
            </div>
            <div className="product__current-priceA">
              <p>{p.actual_price}</p>
            </div>
            <div className="product__change-percentageA">
              {/* <p>{(((p.desired_price - p.actual_price) / p.actual_price) * 100).toFixed(2)}%</p> */}
              <p style={{ color: "green" }}>{p.change_price}%</p>
            </div>

            <div className="product__desired-priceA">
              <p>{p.desired_price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GetAll;
