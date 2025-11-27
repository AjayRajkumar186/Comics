import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import CharacterComponents from './Components/CharacterComponents/CharacterComponents'


function App() {

 


  return (
    <>
    
   <div className="app">
    <div className="container">
      <h1>Rick and Motry</h1>
      <CharacterComponents/>
    </div>
   </div>

   </>
  )
}

export default App
