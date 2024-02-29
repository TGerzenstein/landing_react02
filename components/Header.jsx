import React from 'react';

function Header() {
  return (
    <div>
        <header class='p-2 bg-primary'>
            <form action="/items" class='w-100 d-flex justify-content-center'>
                <input type="text" name="search" className='input-form' />
                <button type='submit' className='btn-form'>Buscar</button>
            </form>
        </header>
    </div>
  )
}

export default Header