import React from "react";
import { Separator, Toggle, TouchOverlay } from "./components";

function App(): JSX.Element {
  return (
    <>
      <TouchOverlay onClick={() => console.log("TESTE")}>
        <h1>Febos UI teste</h1>
      </TouchOverlay>
      <Separator spacing={50} />
      <Toggle onChange={() => console.log("TESTE")} checked={false} />
    </>
  );
}

export default App;
