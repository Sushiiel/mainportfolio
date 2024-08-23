import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { useState } from 'react'
import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineFacebook,AiOutlineMail } from "react-icons/ai";
export default function Hero() {
  const canvasRef = useRef(null);
  const [toggleMenu,setToggleMenu]=useState(false);

  useEffect(() => {
   

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/faBqEgnc1Vn8RZwj/scene.splinecode');

    

    

    
  }, []);
 






  return (
    <section id="Home" className='flex font-made-voyager px-5 py-32 h-full w-full bg-black text-white'>
      <div className='w-full'>
        <div className='flex text-sm'>
          <div className='font-mono'>
            <h1 className='px-2 py-10 text-4xl' id="typedText">Hi, This is <span className="text-customBlue">Sushiiel</span></h1>
            <p id="typedText" className='px-2 text-2xl'>I am a Machine Learning Enthusiast</p>
          <div className='flex px-2 py-3 space-x-4'>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' className='hover:text-white'><AiOutlineLinkedin/></a>
            <a href='https://www.facebook.com/sushiiel.anand' className='hover:text-white'><AiOutlineFacebook/></a>
            <a href='mailto:sushiielanand8@gmail.com' className='hover:text-white'><AiOutlineMail/></a>

            <a href='https://github.com/dashboard'><AiOutlineGithub/></a>
          </div>
          </div>
{/* Render the canvas element for the Spline scene */}
          <canvas ref={canvasRef} id="canvas3d" style={{ width: '50%', height: '500px',marginLeft: '150px'}} />          
        </div>
      </div>
      <div className='bg-black w-full h-full'>

      </div>
      
    </section>
    
  );
}
