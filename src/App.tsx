// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>

      <div className='relative z-10'>
        <Home />
      </div>
    </>
    
  )
}

export default App
