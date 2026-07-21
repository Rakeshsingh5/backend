import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users')
      .then((response) => {
        setUsers(response.data)
      }
    )
  }, [])

  return (
    <>
      <h1>hello i m a loser</h1>
      <p> users : {users.length}</p>

      {
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))
      
      }

    </>
  )
}


export default App
