import React, { useState } from "react";
import { BiStar } from "react-icons/bi";

const StarLikedIcon = ({ fill = false, onClick }) => {
  return (
    <div className="star" onClick={onClick} >
      {fill ? <BiStar color='black' /> : <BiStar color='LightGray' />}
    </div>
  );
};

const StarLikedRating = ({ p }) => {
  const [fill, setFill] = useState(false);

  const handleClick = (p_data) => {
    setFill(!fill);
    console.log(p_data)


  }

  return <StarLikedIcon fill={fill} onClick={() => handleClick(p)} />;
};

export default StarLikedRating;