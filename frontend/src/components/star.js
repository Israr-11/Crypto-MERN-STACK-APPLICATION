import React, { useState } from "react";

const Star = ({ p, bit_coin_name, bit_coin_count, bit_coin_icon, bit_coin_abbreviation, reminder_price, actual_price, change_price, desired_price }) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (id) => {
    if (liked || loading) return;

    setLoading(true);
    try {
      setLiked(true);
      const response = await fetch(`http://localhost:8000/select/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bit_coin_name,
          bit_coin_count,
          bit_coin_icon,
          bit_coin_abbreviation,
          reminder_price,
          actual_price,
          change_price,
          desired_price,
          group_id: id,
          liked: true
        }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  return <div className="star" onClick={() => handleClick(p._id)}>{liked ? "⭐️" : "✩"}</div>;
};

export default Star;
