import React from 'react';


async function ListadoProductos() {

  const productos = await getServerSideProps();

  return (
    <section>
      <article className='container-products'>
        {productos.map((item) => (
          <div  className='card-product' key={item.id}>
            <img src={item.thumbnail} alt={item.title}/>
                <div className='info-product'>
                  <h2 className='title-product'>{item.title}</h2>
                  <p className='price'>${item.price}</p>
                </div>
          </div>
        ))
        }
      </article>
    </section>
  )
}


export default ListadoProductos;


export async function getServerSideProps() {
     
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=casio&limit=4"
  const respuesta = await fetch(url) 
  const entradas = await respuesta.json();

  console.log(entradas)

  return (        
         entradas.results
      )
}



