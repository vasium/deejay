/* eslint-disable */
// import logo from "./logo.svg";
import $ from "jquery";
import { useEffect, useState, useRef } from "react";
// import { findDOMNode } from "react-dom";

function Testings() {
  const [name, setName] = useState("Vasse");
  // const [renderCount, setRenderCount] = useState(0);
  // const renderCount = useRef(1);
  // const headerRef = useRef();
  const [renderCount, setRenderCount] = useState(0);
  const [myHeader, setMyHeader] = useState(null);

  // useEffect(() => {
  //   setRenderCount((renderCount) => renderCount + 1);
  // }, [name]);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  //   useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // function slide() {
  //   $(headerRef.current).slideToggle();
  // }

  useEffect(() => {
    setMyHeader(document.querySelector(".ttt"));
  }, [name]);

  function slide() {
    // setMyHeader(myHeader.target);
    // console.log("Fdasas");
    console.log(myHeader);
    $(myHeader).slideToggle();
  }
  console.log(myHeader);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //   <button>Hide the header</button>
    // </div>
    <>
      {/* <header ref={headerRef}>
        <h1>Hello</h1>
      </header> */}
      <header className="ttt">
        <h1>Hello</h1>
      </header>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div> */}
      {/* <div>I rendered {renderCount.current} times</div> */}
      {/* <button onClick={slide}>Focus</button> */}
      <button onClick={slide}>Hide</button>
    </>
  );
}

export default Testings;
