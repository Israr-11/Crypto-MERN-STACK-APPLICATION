import React, { useEffect, useState } from 'react'

import StarLikedRating from '../components/StarLiked';
//import { useNavigate } from 'react-router-dom'
import { FaBitcoin } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import { BiBitcoin } from "react-icons/bi";
import { IoLogoUsd } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import HomePage from '../components/HomePage';

const icons = {
  "FaBitcoin": FaBitcoin,
  "FaBtc": FaBtc,
  "SiBitcoinsv": SiBitcoinsv,
  "BiBitcoin": BiBitcoin,
  "IoLogoUsd": IoLogoUsd,
  "FaEthereum": FaEthereum,
  "SiDogecoin": SiDogecoin,
  "SiBinance": SiBinance
}


function GroupPost() {
  const [coin, setBitCoin] = useState([])

  //Fetching Data from the database
  useEffect(() => {
    fetch('http://localhost:8000/liked')
      .then(res => res.json())
      .then(data => setBitCoin(data))

  }, [])
  return (
    <div>
      <HomePage
        Heading="Liked Data 🚀🚀🚀"
      />
      {coin.map(a => {
        const Icon = icons[a.bit_coin_icon];
        return (
          <div className="productA" key={a._id}>

            <div className="product__nameA">
              <div className="inside_classA">
                <StarLikedRating />
                {Icon && <Icon />}
                <div className="inside_class_twoA">
                  <p>{a.bit_coin_name}</p>{a.bit_coin_count} {a.bit_coin_abbreviation}
                </div>
              </div>
            </div>


            <div className="product__reminder-priceA" >
              <p>{a.reminder_price}</p>
            </div>
            <div className="product__current-priceA">
              <p>{a.actual_price}</p>
            </div>
            <div className="product__change-percentageA">
              {/* <p>{(((p.desired_price - p.actual_price) / p.actual_price) * 100).toFixed(2)}%</p> */}
              <p style={{ color: "green" }}>{a.change_price}%</p>

            </div>

            <div className="product__desired-priceA">
              <p>{a.desired_price}</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default GroupPost