import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from './components/Card/Card.jsx'
import LoginPage from './components/LoginRegister/Login.jsx'
import Register from './components/LoginRegister/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card /> */}
      <LoginPage />
      {/* <Register /> */}
    </>
  )
}

export default App
