import React, { useState } from "react";
import Button from "../Button/Button";
import ProductCard from "../Products/productCard";
import './Slideshow.css';

export default function Slideshow({slidesData, grabProduct, activeProduct}){
  const [slides, setSlides] = useState(slidesData)
  const [slideDirection, setSlideDirection] = useState('');

  // NOTE: illiminate the need for slide direction
  
  function rotateSlides(slideArr, direction) {
    switch(direction) {
      case 'back': {
        let slide = slideArr.shift();
        setSlides([...slideArr, slide]);
      }
      break;
      case 'forward': {
        let slide = slideArr.pop();
        setSlides([slide, ...slideArr]);
      }
      break;
    }
  }

  function handleClick(direction) {
    setSlideDirection(direction);
    rotateSlides(slides, direction);
    setTimeout(() => setSlideDirection(''), 500);
  }
  console.log(activeProduct);
  return (
    <div className={ activeProduct ? 'fadeOut' : '' + ' slideshow'}>
      <Button className="back-button" handleClick={handleClick} clickParam="back"/>
      {slides.map((slide, index) => (
        index < 3 && <ProductCard product={slide} key={index} index={index} direction={slideDirection} grabProduct={grabProduct}/>
      ))}
      <Button className="forward-button" handleClick={handleClick} clickParam="forward"/>
    </div>
  )
}