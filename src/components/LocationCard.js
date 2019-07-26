import React from "react";

export default function LocationCard(props) {
  return (
    <div>
      <p>{props.location.name}</p>
      <p>{props.location.type}</p>
      <p>{props.location.dimension}</p>
      <p>{props.location.residents}</p>
    </div>
  );
}
