import { useState, useEffect } from 'react';
import Link from 'next/link';
import './SearchComponent.css';


export default function SearchComponent({ searchText }) {
  
  const [ products, setProductos ] = useState([]);
  
  async function showData(searchText) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`
    const respuesta = await fetch(url) 
    const data = await respuesta.json();
 
    setProductos(data.results);
  }


  useEffect(() => {
    showData(searchText);
  }, [searchText])


  return (
    <section>
      <article className='container-products'>
        {products.map((item) => (
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
    </section>
  )
}
