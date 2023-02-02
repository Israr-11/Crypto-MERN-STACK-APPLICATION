import React from "react";
import Product from "../components/product";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from "react-router";

function HomePage(props) {
const navigate = useNavigate();

const handleStarClick = () => {
    navigate("/liked");
  };
  return (
    <div>
     <h2 style={{textAlign:"center"}}>{props.Heading}</h2>

      <div
        className="icons_above_header"
        style={{ marginTop: "-50px", marginLeft: "180px" }}>
        <AiTwotoneHeart style={{ fontSize: "50px", fill: "LightGray" }} />
        <AiTwotoneStar style={{ fontSize: "50px" }}
         onClick={() => {
          handleStarClick();
        }}
        />
      </div>
    <Product/>

    </div>
  );
}

export default HomePage;






