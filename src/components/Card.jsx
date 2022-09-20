import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
