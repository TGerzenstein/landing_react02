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
        <h1>Presentation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque deserunt totam amet voluptas, deleniti consequatur a aspernatur enim autem tempora ex necessitatibus, cum ipsa quibusdam blanditiis excepturi. Placeat blanditiis suscipit temporibus quas illum incidunt animi doloribus, consectetur nemo minima.</p>    
      </div>
    <Users users={users}/>
    </div>
  )
}

export default IndexPage
