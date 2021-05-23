import React from "react";

function Kitties({ cats }) {
  return (
    <>
      {cats.map((cat) => (
        <div key={cat.id}>
          {console.log(cat)}
          <img width="400px" src={cat.url} alt="Cats" />
        </div>
      ))}
    </>
  );
}

export default Kitties;
