import React from "react";
import ProductCard from "./ProductCard";
import Input from "../Forms/Input";
import Calendar from "../Calendar/Calendar";
import './ProductView.css';
import './ProductCard.css';

export default function ProductView({product, closeView}){
  return (
    <div className="product-view">
    <Input id="close-product-view" label="close"
    labelClick={() => closeView(false)}
    type="checkbox" />
      <ProductCard product={product} />
      <Calendar />
    </div>
  )
}