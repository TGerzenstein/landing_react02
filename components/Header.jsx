"use client";

import { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header({ searchText, handleSearch }) {
  const [inputSearch, setInputSearch] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(inputSearch);
  }

  function handleChange(event) {
    const value = event.target.value;
    setInputSearch(value);

    console.log("componente ejecutado")
  }

  return (
        <header className='header-project p-2'>
            <Container className='container-header p-0 border-0 d-flex justify-content-center align-items-center'>
              <Row>
                <Col>
                  <form action="" className='header-form' onSubmit={handleSubmit}>
                    <input type="text" 
                        name='search'
                        placeholder='Search'
                        className='input-form'
                        onChange={handleChange}
                        value={inputSearch}
                     />
                    <button className='btn-form'>Buscar</button>        
                  </form>
                </Col>
              </Row>
            </Container>
        </header>
  )
}

export default Header

