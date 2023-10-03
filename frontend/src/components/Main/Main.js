import React from "react";

import './Main.css'
import Heading from "../Typography/Heading";
import Slideshow from "../Slideshow/Slideshow";

export default function Main() {
  const patronName = 'Daniel';
  return (
    <main>
      <Heading type={1} text={'Welcome ' + patronName} className={'hero-heading'} />
      <Slideshow />
    </main>
    
  )
}