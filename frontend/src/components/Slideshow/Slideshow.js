import React from "react";
import Button from "../Button/Button";
import ProductCard from "../Products/productCard";
import './Slideshow.css';

export default function Slideshow(){
  const slides = [
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
  ]
  return (
    <div className="slideshow">
      <Button className="back-button"/>
      {slides.map((slide, index) => (
        <ProductCard product={slide} key={index} index={index}/>
      ))}
      <Button className="forward-button" />
    </div>
  )
}