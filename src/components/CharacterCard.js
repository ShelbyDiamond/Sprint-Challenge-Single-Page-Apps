import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.character.image} />
      <p>
        Name:{props.character.name} Species: {props.character.species}
      </p>
      <p>Location: {props.character.location.name}</p>
      <p>Origin: {props.character.origin.name}</p>
    </div>
  );
}
