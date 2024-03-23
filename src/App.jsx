import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from './components/Card/Card.jsx'
import LoginPage from './components/LoginRegister/Login.jsx'
import RegisterPage from './components/LoginRegister/Register.jsx'
import MedicationAdd from './components/MedicineAdd/MedicineAdd.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <MedicationAdd />
    </>
  )
}

export default App
