import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
function App() {
  return (
    <div className="items-center justify-center h-screen p-20 w-full max-w-[900px] mx-auto">
      <Navbar />
      <div className="items-center justify-center h-screen">
        <Body />
      </div>
    </div>
  );
}

export default App;
