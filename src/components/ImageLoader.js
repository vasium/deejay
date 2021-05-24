import React, { Fragment, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageLoader.css";

function ImageLoader() {
  const [value, setvalue] = useState({});
  const [cats, setCats] = useState([]);

  function fetchCats() {
    return fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1&page=1&order=Desc&mime_types=gif`
    ).then((response) => response.json());
  }

  const onImageLoaded = () => {
    setvalue({
      loaded: true,
      src: value.src,
    });
  };

  const refreshImage = () => {
    console.log(cats);
    fetchCats().then((cats) => {
      setCats(cats);
      cats.map((cat) => {
        return setvalue({
          loaded: false,
          src: cat.url,
        });
      });
    });
  };

  useEffect(() => {
    fetchCats().then((cats) => {
      setCats(cats);
      cats.map((cat) => {
        return setvalue({
          loaded: false,
          src: cat.url,
        });
      });
    });
  }, []);

  return (
    <Fragment>
      <div
        className="title"
        style={{
          textAlign: "center",
          fontSize: "1em",
          margin: "20px",
        }}
      >
        <h1>These 👉 😻😽🙀😺🐈 ...are cats!!!</h1>
        <h2>Cats are cool 😎</h2>
      </div>
      <div className="image-container">
        <img
          alt=""
          width="380"
          // height="295"
          src={value.src}
          onLoad={onImageLoaded}
        />
        {!value.loaded && (
          <div className="image-container-overlay">
            {/* <CircularSpinner /> */}
            <Spinner animation="border" />
          </div>
        )}
      </div>
      <div>
        <button onClick={refreshImage} className="button">
          Refresh Image
        </button>
      </div>
    </Fragment>
  );
}

export default ImageLoader;
