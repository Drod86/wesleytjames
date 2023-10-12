import React from "react";
import Heading from "../Typography/Heading";
import Button from "../Button/Button";
import './ProductCard.css';

export default function ProductCard({product, index, direction, grabProduct}){
  const {id, title, featureList} = product;
  const orderClass = 'card' + index;
  const newClass = "product-card " + orderClass + " " + direction;
  return (
    <div className={newClass}>
      <Heading type={2} text={title} />
      {featureList.map((feature, index) => <li key={index}>{feature}</li>)}
      <Button text="Book it" type="button" handleClick={() => grabProduct(id)} />
    </div>
  )
}