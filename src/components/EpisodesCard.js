import React from "react";
import styled from "styled-components";

const EpisodeName = styled.p`
  color: black;
`;
const WholeBox = styled.div`
  border: 1px solid grey;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
`;

export default function EpisodesCard(props) {
  return (
    <WholeBox>
      <EpisodeName>{props.episode.name}</EpisodeName>
      <p>{props.episode.air_date}</p>
      <p>{props.episode.episode}</p>
    </WholeBox>
  );
}
