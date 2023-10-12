import React, { useState } from "react";
import './Main.css'
import { products } from "../../data/Database";
import Heading from "../Typography/Heading";
import Slideshow from "../Slideshow/Slideshow";
import ProductView from "../Products/ProductView";
import Sidebar from "../Sidebar/Sidebar";

export default function Main({auth, onAuth, authing, onAuthing}) {
  const patronName = 'Daniel';
  const [activeProduct, setActiveProduct] = useState(false);
  const grabProduct = (id) => {
    setActiveProduct(id)
  };
  const productData = products.filter((product => product.id === activeProduct))[0];
  return (
    <main>
      <Heading type={1} text={'Welcome ' + patronName} className={'hero-heading'} />
      <Slideshow slidesData={products} grabProduct={grabProduct} activeProduct={activeProduct}/>
      {activeProduct && <ProductView product={productData} closeView={setActiveProduct}/>}
      <Sidebar auth={auth} onAuth={onAuth} authing={authing} onAuthing={onAuthing} />
    </main>
    
  )
}