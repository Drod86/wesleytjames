import React from "react";
import ProductCard from "./productCard";
import Input from "../Forms/Input";
import './ProductView.css';
import './ProductCard.css';

export default function ProductView({product, closeView}){
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