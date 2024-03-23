import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from './components/Card/Card.jsx'
import Login from './components/LoginRegister/Login.jsx'
import Register from './components/LoginRegister/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card /> */}
      {/* <Login /> */}
      <Register />
    </>
  )
}

export default App
