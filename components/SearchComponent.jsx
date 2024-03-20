import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function SearchComponent({ searchText }) {
  
  const [ productos, setProductos ] = useState([]);
  
  async function showData(searchText) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`
    const respuesta = await fetch(url) 
    const data = await respuesta.json();
 
    console.log("mostrar:", data.results)
    setProductos(data.results);
  }


  useEffect(() => {
    showData(searchText);
  }, [searchText])
  console.log("componente ejecutado");


  return (
    <section>
      <article className='container-products'>
        {productos.map((item) => (
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
