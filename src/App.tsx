import React from "react";
import Navigation from "./components/ui/Navigation";
import Hero from "./components/hero";
import zombieimg from './zombiebg.png';
import Bid from "./components/bid";

function App() {
  return (
    <div
      className="bg-white m-0 p-0 bg-cover bg-center bg-repeat"
      style={{
        backgroundImage: `url(${zombieimg})`
      }}
    >
      <Navigation />
      <Hero />
      <Bid method="test" />
    </div>
  );
}

export default App;