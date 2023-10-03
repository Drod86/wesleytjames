import React from "react";
import Heading from "../Typography/Heading";
import Button from "../Button/Button";
import './ProductCard.css';

export default function ProductCard({product, index}){
  const {title, featureList} = product;
  const orderClass = 'card' + index;
  return (
    <div className={"product-card " + orderClass}>
      <Heading type={2} text={title} />
      {featureList.map((feature, index) => <li key={index}>{feature}</li>)}
      <Button text={'Book it'} />
    </div>
  )
}