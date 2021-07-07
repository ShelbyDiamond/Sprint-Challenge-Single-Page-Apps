import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        return setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Rick, I think it broke!", error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
