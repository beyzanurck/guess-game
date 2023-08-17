import { useState } from 'react'
import './App.css'
import Guess from './Guess'

const randomInt =  Math.floor(Math.random() * 101)

function App() {

  return (
    <>
      <Guess random = {randomInt} />
    </>
  )

}

export default App


