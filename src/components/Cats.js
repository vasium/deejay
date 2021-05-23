import React, { useEffect, useState } from "react";
import Kitties from "./Kitties";

function fetchCats() {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&page=1&order=Desc`
  ).then((response) => response.json());
}

function Cats() {
  const [cats, setCats] = useState([]);

  const moreCats = () => {
    fetchCats().then((cats) => setCats(cats));
  };

  useEffect(() => {
    fetchCats().then((cats) => setCats(cats));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.1em",
      }}
    >
      <h1>These 👉 🐈🐱‍👓🐱🐱‍🚀🐱‍🏍‍...are cats!!!</h1>
      <h2>Cats are cool 🐱‍👤</h2>
      <Kitties cats={cats} />
      <button style={{ fontSize: "1.2em" }} onClick={moreCats}>
        Load more cats! 😻
      </button>
    </div>
  );
}

export default Cats;
