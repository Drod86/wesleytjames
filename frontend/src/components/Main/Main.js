import React from "react";

import './Main.css'
import Heading from "../Typography/Heading";
import Slideshow from "../Slideshow/Slideshow";
import Sidebar from "../Sidebar/Sidebar";

export default function Main() {
  const patronName = 'Daniel';
  return (
    <main>
      <Heading type={1} text={'Welcome ' + patronName} className={'hero-heading'} />
      <Slideshow />
      <Sidebar />
    </main>
    
  )
}