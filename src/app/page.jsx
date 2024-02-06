import React from 'react';
import Users from '/components/Users';

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json();
  console.log(data)
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      <div className='box-presentation'>
        <h1 className='title-page'>Presentation</h1>
      </div>
    <Users users={users}/>
    </div>
  )
}

export default IndexPage
