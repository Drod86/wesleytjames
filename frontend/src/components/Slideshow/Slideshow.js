import React, { useState } from "react";
import Button from "../Button/Button";
import ProductCard from "../Products/productCard";
import './Slideshow.css';

export default function Slideshow(){
  // The Slides data and data manipulation methods will be abstracted out
  const slidesData = [
    {
      title: 'Intro',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      title: 'Session',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      title: 'Program',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      title: 'Some Product',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      title: 'Some Other',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
  ]



  //////////////////
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

  return (
    <div className="slideshow">
      <Button className="back-button" handleClick={handleClick} clickParam="back"/>
      {slides.map((slide, index) => (
        index < 3 && <ProductCard product={slide} key={index} index={index} direction={slideDirection}/>
      ))}
      <Button className="forward-button" handleClick={handleClick} clickParam="forward"/>
    </div>
  )
}