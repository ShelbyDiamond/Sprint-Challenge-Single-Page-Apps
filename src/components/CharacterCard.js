import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.character.image} />
      <p>{props.character.name}</p>
      <p>{props.character.location.name}</p>
    </div>
  );
}
