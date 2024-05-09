"use client";

import React from 'react';
import Header from '/components/Header';
import SearchComponent from '../../components/SearchComponent';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';


function HomePage() {
    const [searchText, setSearchText] = useState("");
    const [ showProducts, setProducts ] = useState([]);

    async function showData() {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=kanken&limit=8`
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
        <section className='container-products container border-0'>
          {showProducts.map((item) => (
              <Card className='card-product p-2 m-2'>
                <Link key={item.id} href={`/items/${item.id}`}>
                <Card.Img variant="top" src={item.thumbnail} alt={item.title}/>
                <div className='line'></div>
                <Card.Body className='info-product'>
                  <Card.Title className='condition'>{item.condition}</Card.Title>
                  <Card.Title className="an title-product">{item.title}</Card.Title>
                  <Card.Text className='price'>$ {Intl.NumberFormat("de-DE").format(item.price)}{" "} {item.currency_id}</Card.Text>
                  <Card.Text className='title-stock'>Stock disponible</Card.Text>
                  <Card.Text className='stock'>Cantidad: {item.available_quantity}</Card.Text>
                </Card.Body>
                </Link>
              </Card>
          ))}
        </section>
    </div>
  )
}

export default HomePage
