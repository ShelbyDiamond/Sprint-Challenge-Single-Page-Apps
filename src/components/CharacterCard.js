import React from "react";
import styled from "styled-components";

const NameSpecies = styled.p`
  color: grey;
`;

const CharacterBox = styled.div`
  border: 1px solid grey;
  padding: 5px;
  margin: 50px;
  border-radius: 5px;
`;

export default function CharacterCard(props) {
  return (
    <CharacterBox>
      <img src={props.character.image} />
      <p>
        <strong>{props.character.name}</strong>
      </p>
      <NameSpecies>
        {props.character.species} {props.character.status}
      </NameSpecies>
      <p>Location: {props.character.location.name}</p>
      <p>Origin: {props.character.origin.name}</p>
    </CharacterBox>
  );
}
