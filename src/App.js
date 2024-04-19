import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
function App() {
  return (
    <div className="items-center justify-center h-screen p-20 font-opensans w-full max-w-[800px] mx-auto">
      <Navbar />
      <div className="items-center justify-center h-screen font-opensans">
        <Body />
      </div>
    </div>
  );
}

export default App;
