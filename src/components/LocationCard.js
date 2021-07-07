import React from "react";
import styled from "styled-components";

const Name = styled.p`
  font-size: 1.2rem;
`;

export default function LocationCard(props) {
  return (
    <div>
      <p>
        <strong>{props.location.name}</strong>
      </p>
      <p>{props.location.type}</p>
      <p>{props.location.dimension}</p>
    </div>
  );
}
