import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreateCrewmate from './pages/CreateCrewmate'

import './App.css'

function App() {


  

  return (
    <div className='App'>
      <h1>Welcome to the Crewmate Creator!</h1>
      <img src='src/images/pic1.jpeg' width='50%' height='50%'></img>
      <Link to="/create"><button>Create a Crewmate!</button></Link>
      <Link to="/gallery"><button>Check out Gallery!</button></Link>
    </div>
  )
}

export default App
