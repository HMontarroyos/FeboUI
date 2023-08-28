import React from "react";
import { Separator, Toggle, TouchOverlay, Video } from "./components";

function App(): JSX.Element {
  return (
    <>
      <TouchOverlay onClick={() => console.log("TESTE")}>
        <h1>Febos UI</h1>
      </TouchOverlay>
      <Video
        src={"https://www.youtube.com/watch?v=Q4BCszJMNdw"}
        controls
        autoPlay
        width={"200px"}
        height={"200px"}
        loop
      />
      <Separator spacing={50} />
      <Toggle onChange={() => console.log("TESTE")} checked={false} />
    </>
  );
}

export default App;
