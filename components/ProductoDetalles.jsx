import React from 'react'

function ProductoDetalles() {
  return (
    <section className='section-producto'>
        <div className='product-container'>
            <img src="/img.jpg" alt="" className='img-product'/>
            <div className='product'>
                <p className='product-title'>Reloj Casio A158wa-1 A158wa-1 Vestido Digital Color De La Correa Plateado Color Del Bisel Plateado Color Del Fondo P</p>
                <p className='adver'>MÁS VENDIDO</p>
                <p  className='product-price'>$48.800</p>
                <p className='options'>Ver medios de pago</p>
                <strong><p className='subtitle'>Lo que tenés que saber de este producto</p></strong>   
                <ul>
                    <li>Lorem ipsum dolor, sit amet consectetur</li>
                    <li>Lorem ipsum dolor, sit amet consectetur</li>
                    <li>Lorem ipsum dolor, sit amet consectetur</li>
                    <li>Lorem ipsum dolor, sit amet consectetur</li>
                    <li>Lorem ipsum dolor, sit amet consectetur</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ProductoDetalles