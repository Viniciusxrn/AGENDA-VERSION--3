import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  
  const navigate = useNavigate();


  const handleClick = () =>
  {
    navigate('./Empresa');
  }

  return (
    <>
      <h1 className='x1'> AGENDA UNIJORGE </h1>
      <br />
      <br />
      <div className='navigate'>  
        <button  className='y1' > HOME </button>
        <button className='y1' onClick={ handleClick } > EMPRESA </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container2">
        <div className='transition ' >OLÁ MUNDO  </div>
      </div>
    </>
  )
}

export default App
