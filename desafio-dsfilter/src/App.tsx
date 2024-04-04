import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { ContextListSize } from "./utils/context-list-size";

function App() {
  const [contextListSize, setContextListSize] = useState<number>(0);

  return (
    <>
      <ContextListSize.Provider value={{contextListSize, setContextListSize}}>
        <Header />
        <Body />
      </ContextListSize.Provider>
    </>
  );
}

export default App;
