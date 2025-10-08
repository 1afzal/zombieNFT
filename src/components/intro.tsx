import React from 'react'
import pixelated from './pixelated.png'

function Intro(){
  return (
    <div className=" main flex items-center justify-around mt-10">
        <div>
            <p className="text-8xl font-black ">Largest Zombie NFT<br />
            </p>
            <span className="text-white text-7xl  font-black">Collection Marketplace.</span>
        </div>
        <div>
            
            <img src={pixelated} className="w-100 h-125 border-solid border-b-20 border-l-20 border-black rounded-md" />
            
        </div>

      
    </div>
  )
}

export default Intro;
