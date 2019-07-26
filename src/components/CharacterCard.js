import React from "react";
import styled from "styled-components";

const NameSpecies = styled.p`
  color: grey;
`;

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.character.image} />
      <NameSpecies>
        Name:{props.character.name} Species: {props.character.species}
      </NameSpecies>
      <p>Location: {props.character.location.name}</p>
      <p>Origin: {props.character.origin.name}</p>
    </div>
  );
}
