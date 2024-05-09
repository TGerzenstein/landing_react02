import { useState, useEffect } from 'react';
import Link from 'next/link';
import './SearchComponent.css';
import Card from 'react-bootstrap/Card';


export default function SearchComponent({ searchText }) {
  
  const [ products, setProductos ] = useState([]);
  
  async function showData(searchText) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`
    const respuesta = await fetch(url) 
    const data = await respuesta.json();
 
    setProductos(data.results);
    console.log("- componente ejecutado")
  }


  useEffect(() => {
    showData(searchText);
  }, [searchText])


  return (
    <section className='container-products container border-0'>
      {products.map((item) => (
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
  )
}
