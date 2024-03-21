import { useState, useEffect } from 'react';


export default function ProductDescriptionText({ productId }) {

  const [first, setfirst] = useState([])

  async function fetchData() {
    const props = `https://api.mercadolibre.com/items/${productId}/description`
    const res = await fetch(props)
    const entry = await res.json();      

    setfirst(entry);
  }

  useEffect(() => {
    fetchData();
  }, []);


  console.log("here is ID:", productId)
  return (
      <section>
        <div>
          <p className='description-title'>Descripción: </p>
          <p className='prod-description'>{first.plain_text}</p>
        </div>
      </section>
  )
}