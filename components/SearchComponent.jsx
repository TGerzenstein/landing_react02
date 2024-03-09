import { useState, useEffect } from 'react';


export default function SearchComponent({ searchText, handleSearch }) {
  
  const [ productos, setProductos ] = useState([]);
  const [ search, setSearch ] = useState('');
  
  async function showData(searchText) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`
    const respuesta = await fetch(url) 
    const data = await respuesta.json();

    //console.log(data.results)
    //return data.results
    setProductos(data.results);
  }
  //showData();

  useEffect(() => {
    showData(searchText);
  }, [searchText])

  //const handleSearch = (event) => {
    //setSearch(event.target.value);
  //  searchText(event.target.value);
//  }

  // filtrado
  //let entradas = []
  
 // if(!search) 
  //{
   // entradas = productos
  //} else {
    //    entradas = productos.filter( (dato) => 
    //    dato.title.toLowerCase().includes(search.toLocaleLowerCase()) 
    //)        
  //}

  return (
    <section>
      <article className='container-products'>
        {productos.map((item) => (
          
          <div  className='card-product' key={item.id}>
            <img src={item.thumbnail} alt={item.title}/>
                <div className='line'></div>
                <div className='info-product'>
                <p>{item.condition}</p>
                <a className="an"href=""><h2 className='title-product'>{item.title}</h2></a>
                  <p className='price'>${item.price}</p>
                  <p>{item.currency_id}</p>
                </div>
          </div>
        ))}
      </article>
    </section>
  )
}
