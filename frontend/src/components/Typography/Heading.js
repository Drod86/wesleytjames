import React from "react";

import './Typography.css'

export default function Heading({text, type, className="heading"}) {
  const heading = (type, text, className) => {
    switch(type){
      case 1: return <h1 className={className}>{text}</h1>
      case 2: return <h2 className={className}>{text}</h2>
      case 3: return <h3 className={className}>{text}</h3>
      case 4: return <h4 className={className}>{text}</h4>
      case 5: return <h5 className={className}>{text}</h5>
      case 6: return <h6 className={className}>{text}</h6>
    }
  }

  return (
    heading(type, text, className)
  )
}