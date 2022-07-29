import React from "react";
import "./NoMatch.css";

const NoMatch = () => {
  const noMatchImg = "https://media0.giphy.com/media/xTiN0L7EW5trfOvEk0/200w.webp?cid=ecf05e47c6aww6h5emo4wa86sb2z4wqha4kjvjyx4jkzspzz&rid=200w.webp&ct=g"
  return (
    <div className="no_match_found">
      <img src={noMatchImg} alt="nomatchfound" />
    </div>
  );
};

export default NoMatch;
