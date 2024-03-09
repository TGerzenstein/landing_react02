"use client";

import { useState } from 'react';


function Header({ searchText, handleSearch }) {

  const [first, setFirst] = useState("")
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(first);


    console.log("Producto buscado:", searchText);
  }

  function handleChange(event) {

    const value = event.target.value;
    setFirst(value);
  }

  return (
    <div>
        <header>
            <form onSubmit={handleSubmit}>
              
              <input type="text" 
                  name='search'
                  placeholder='Search'
                  className='input-form'
                  onChange={handleChange}
                  value={first}
                  />

              <button className='btn-form'>Buscar</button>
          </form>
        </header>
    </div>
  )
}

export default Header