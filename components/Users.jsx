
function Users({ users }) {
  return (
    <div className='box-main'>
      <div className='box'>
        <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <div className='card'>
                <img src={user.avatar}/>
                <h3>{user.first_name} {user.last_name}</h3>
                <p className='email'>Email: {user.email}</p>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </div>  
  )
}

export default Users