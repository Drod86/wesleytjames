import React from "react";
import ProductCard from "./ProductCard";
import Input from "../Forms/Input";
import './ProductView.css';
import './ProductCard.css';

export default function ProductView({product, closeView}){
  console.log(product);
  const {id, title, features} = product;
  return (
    <div className="product-view">
    <Input id="close-product-view" label="close"
    labelClick={() => closeView(false)}
    type="checkbox" />
      <ProductCard product={product} />
      <div className="calendar">Calendar</div>
    </div>
  )
}