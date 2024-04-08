import { useState, useEffect } from 'react';


export default function ProductDescriptionText({ productId }) {

  const [ description, setDescription] = useState([])

  async function fetchData() {
    const props = `https://api.mercadolibre.com/items/${productId}/description`
    const res = await fetch(props)
    const entry = await res.json();      

    setDescription(entry);
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