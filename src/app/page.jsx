"use client";

import React from 'react';
import Header from '/components/Header';
import SearchComponent from '../../components/SearchComponent';
import { useState, useEffect } from 'react';
import Link from 'next/link';


function HomePage() {
    const [searchText, setSearchText] = useState("");
    const [ showProducts, setProducts ] = useState([]);

  
    async function showData() {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=kanken&limit=6`
      const response = await fetch(url) 
      const data = await response.json();
   
      setProducts(data.results);
    }
  
  
    useEffect(() => {
      showData();
    }, [])
  

    function handleSearch(text) {
      setSearchText(text);
    }

  return (
    <div>
        <Header searchText={searchText}  handleSearch={handleSearch} />
        <SearchComponent searchText={searchText} />
        <div>
          <article className='container-products'>
              {showProducts.map((item) => (
                <Link className='card-product' key={item.id} href={`/items/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title}/>
                      <div className='line'></div>
                      <div className='info-product'>
                      <p className='condition'>{item.condition}</p>
                      <a className="an" href=""><h2 className='title-product'>{item.title}</h2></a>
                        <p className='price'>$ {Intl.NumberFormat("de-DE").format(item.price)}{" "} {item.currency_id}</p>
                        <p className='title-stock'>Stock disponible</p>
                        <p className='stock'>Cantidad: {item.available_quantity}</p>
                      </div>
                </Link>
              ))}
          </article>
        </div>
    </div>

  )
}

export default HomePage
