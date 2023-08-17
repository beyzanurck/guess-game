import React from 'react'
import { useState } from 'react'

export default function Guess(props) {
    const [guess, setGuess] = useState('')

    const handleChange = (event) => {
        setGuess(event.target.value)
    }

  return (
    <div>
      <p>Guess a number between 0-100.</p>

      <form>
        <input
            type='number'
            id='user-guess'
            name='user-guess'
            placeholder='guess here'
            onChange={handleChange} //calls whenever the input value changes.
        />
        <button>Click</button>
      </form>
      <p>{guess}</p>
    </div>
  )
}
