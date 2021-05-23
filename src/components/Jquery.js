import $ from "jquery";
import { useEffect, useState, useRef } from "react";

function Jquery() {
  const [myHeader, setMyHeader] = useState(null);
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    setMyHeader(document.querySelector(".myHeader"));
  }, []);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function slide() {
    $(myHeader).slideToggle();
  }

  return (
    <>
      <header className="myHeader">
        <h1>Hello</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>
          My name is {name} and it used to be {prevName.current}
        </div>
      </header>

      <button onClick={slide}>Hide</button>
    </>
  );
}

export default Jquery;
