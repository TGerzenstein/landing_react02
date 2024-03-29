"use client"
import { useEffect, useState } from "react";
import ProductDescriptionText from "../../../../components/ProductDescriptionText";


export default function SearchId({ params }) {
  const [ productDetails, setProductDetails] = useState("");

  async function fetchData() {
      const props = `https://api.mercadolibre.com/items/${params.id}`
      const res = await fetch(props)
      const entry = await res.json();      
        
      setProductDetails(entry);
  }

  useEffect(() => {
      fetchData();
  }, []);


  return (
      <section className='section-product'>
        <div className="container">
            <div className="box-1">
              <img src={productDetails.thumbnail} alt={productDetails.title} className='img-product'/>
            </div>
            <div className='box-2'>
                <p className="condition-product">{productDetails.condition}</p> 
                <p className='product-title'>{productDetails.title}</p>
                <p  className='product-price'>$ {Intl.NumberFormat("de-DE").format(productDetails.price)}{" "} {productDetails.currency_id}</p>
                <p className="options">Ver los medios de pagos</p>
            </div> 
            <div className="box-3">
              <div className="line-product"></div>
              <ProductDescriptionText productId={params.id} />
            </div>   
        </div>
      </section>
  );
}
