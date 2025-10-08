import React from "react";
import RedundantCards from "./RedundantCards";
import baseballzombie from './BaseballZombie.jpg';
import bucketZombie from './bucketZombie.jpg';
import deadZombie from './deadZombie.jpg';
import grandpaZombie from './GrandpaZombie.jpg';
import MummyZombie from './mummyZombie.jpg'
import Intro from "./intro";
import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher"

function Hero() {
  return (
    <div>
      <Intro />
      <div className="flex flex-wrap justify-between gap-10 m-10">
        <RedundantCards title="Baseball Zombie" healthbar={79} imgsrc={baseballzombie} />
        <RedundantCards title="Bucket Zombie" healthbar={55} imgsrc={bucketZombie} />
        <RedundantCards title="Dead Zombie" healthbar={35} imgsrc={deadZombie} />
        <RedundantCards title="Bucket Zombie" healthbar={55} imgsrc={bucketZombie} />
        <RedundantCards title="Dead Zombie" healthbar={35} imgsrc={deadZombie} />
        
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />
        <RedundantCards title="mummy Zombie" healthbar={23} imgsrc={MummyZombie} />

        <RedundantCards title="Grandpa Zombie" healthbar={24} imgsrc={grandpaZombie} />
        <RedundantCards title="Baseball Zombie" healthbar={56} imgsrc={baseballzombie} />
       
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />
        <RedundantCards title="Baseball Zombie" healthbar={56} imgsrc={baseballzombie} />
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />
        <RedundantCards title="Baseball Zombie" healthbar={56} imgsrc={baseballzombie} />
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />
        <RedundantCards title="Bucket Zombie" healthbar={45} imgsrc={bucketZombie} />




      </div>
      </div>
  );
}

export default Hero;
