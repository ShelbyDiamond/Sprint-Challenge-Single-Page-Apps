import React from "react";
import styled from "styled-components";

const EpisodeName = styled.p`
  color: rebeccapurple;
`;

export default function EpisodesCard(props) {
  return (
    <div>
      <EpisodeName>{props.episode.name}</EpisodeName>
      <p>{props.episode.air_date}</p>
      <p>{props.episode.episode}</p>
    </div>
  );
}
