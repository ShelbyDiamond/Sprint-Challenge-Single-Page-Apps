import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodesCard from "./EpisodesCard";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        return setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log("Morty, What are you watching?", error);
      });
  }, []);

  return (
    <section className="grid-view">
      {episodes.map(episode => (
        <EpisodesCard episode={episode} />
      ))}
    </section>
  );
}
