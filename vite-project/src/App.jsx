import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src='../public/img/02-logos/puchulitamusicainfantil1.png' className="logo" alt="puchulitalogo" />
        </a>
        <a href="https://alejandrobavaro.github.io/gondraworld/" target="_blank">
          <img src='../public/img/02-logos/logogondraworld2.png' className="logo react" alt="gondraworldlogo"/>
        </a>
      </div>
         
    </>
  )
}

export default App
