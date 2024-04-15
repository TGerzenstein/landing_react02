import { useState, useEffect } from 'react';


export default function ProductDescriptionText({ productId }) {

  const [ description, setDescription] = useState([])

  async function fetchData() {
    const url = `https://api.mercadolibre.com/items/${productId}/description`
    const response = await fetch(url)
    const data = await response.json();      

    setDescription(data);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <section>
        <div>
          <p className='description-title'>Descripción:</p>
          <p className='prod-description'>{description.plain_text}</p>
        </div>
      </section>
  )
}