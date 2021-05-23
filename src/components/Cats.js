import React, { useEffect, useState } from "react";
import Kitties from "./Kitties";

function fetchCats() {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&page=1&order=Desc&mime_types=gif`
  ).then((response) => response.json());
}

function Cats() {
  const [cats, setCats] = useState([]);
  const [loading, setloading] = useState(true);

  const moreCats = () => {
    setloading(true);

    fetchCats().then((cats) => {
      setloading(false);
      setCats(cats);
    });
  };

  useEffect(() => {
    fetchCats().then((cats) => {
      setloading(false);
      setCats(cats);
    });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.1em",
      }}
    >
      <h1>These 👉 😻😽🙀😺🐈 ...are cats!!!</h1>
      <h2>Cats are cool 😎</h2>
      <button style={{ fontSize: "1.2em" }} onClick={moreCats}>
        Load more cats! 😻
      </button>
      <p>
        <Kitties cats={cats} loading={loading} />
      </p>
    </div>
  );
}

export default Cats;
