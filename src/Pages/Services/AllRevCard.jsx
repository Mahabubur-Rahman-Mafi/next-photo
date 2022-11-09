import React from "react";
import './Service.css'

const AllRevCard = ({ rev }) => {
  const { name, text } = rev;
  return (
    <div className="">
      <>
        <h5>" {text} "</h5>
        <p className="ms-3">Review By: {name ? name : "none"}</p>
      </>
    </div>
  );
};

export default AllRevCard;
