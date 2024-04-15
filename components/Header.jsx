"use client";
import { useState } from 'react';
import './Header.css';

function Header({ searchText, handleSearch }) {
  const [inputSearch, setInputSearch] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(inputSearch);
  }

  function handleChange(event) {
    const value = event.target.value;
    setInputSearch(value);
  }

  return (
    <div>
        <header className='header-project'>
          <form className='header-form' onSubmit={handleSubmit}>
            <input type="text" 
                name='search'
                placeholder='Search'
                className='input-form'
                onChange={handleChange}
                value={inputSearch}
            />
            <button className='btn-form'>Buscar</button>
          </form>
        </header>
    </div>
  )
}

export default Header