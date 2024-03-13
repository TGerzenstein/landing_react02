"use client"
import { useEffect, useState } from "react";


function TestPage({ params }) {
    const [ productDetails, setProductDetails] = useState({});


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
            <section className='section-producto'>
                <div className='product-container'>
                    <img src={productDetails.thumbnail} alt={productDetails.title} className='img-product'/>
                    <div className='product'>
                        <p className='product-title'>{productDetails.title}</p>
                        <p  className='product-price'>${productDetails.price}</p>
                    </div>
                </div>
            </section>
    );
}

export default TestPage;
