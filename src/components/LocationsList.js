import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [findLocation, setLocation] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        return setLocation(response.data.results);
      })
      .catch(error => {
        console.log("Rick, Where are we?!", error);
      });
  }, []);

  return (
    <section>
      {findLocation.map(location => (
        <LocationCard location={location} />
      ))}
    </section>
  );
}
