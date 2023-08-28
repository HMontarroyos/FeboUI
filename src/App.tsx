import React from "react";
import { Separator, Toggle, TouchOverlay, Video, Date } from "./components";

function App(): JSX.Element {
  return (
    <>
      <TouchOverlay onClick={() => console.log("TESTE")}>
        <h1>Febos UI</h1>
      </TouchOverlay>
      <Date
        value={"2017-06-03"}
        bold
        borderStyle={"solid"}
        borderColor={"black"}
        colorDate={"black"}
        backgroundColorInput={"white"}
        minDate={"2017-06-02"}
        maxDate={"2017-06-05"}
        onChange={() => console.log("TESTE")}
      />
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
