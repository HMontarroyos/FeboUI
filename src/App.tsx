import React from "react";
import { Toggle } from "./components";

function App(): JSX.Element {
  return (
    <>
      <h1>Febos UI</h1>
      <Toggle onChange={() => console.log("TESTE")}  checked={false}/>
    </>
  );
}

export default App;
