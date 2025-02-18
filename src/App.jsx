import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
    <Navbar/>
    <div className='h-[100px]'>

    </div>
    <Footer/>
   </div>
  )
}

export default App
