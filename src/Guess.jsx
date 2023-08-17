import React from 'react'
import { useState } from 'react'

export default function Guess(props) {
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState('')
    
    const handleChange = (event) => {
        setGuess(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const guessNumber = parseInt(guess, 10)

        if(guessNumber === props.random){
            setMessage("Congratulations! You guessed correctly!")
        }
        else if (guessNumber < props.random) {
            setMessage("Try a higher number.")
        }
        else {
            setMessage("Try a lower number.")
        }
    }

  return (
    <div>
      <p>Guess a number between 0-100.</p>

      <form id="form" type="submit" onSubmit={handleSubmit}>
        <input
            type='number'
            id='user-guess'
            name='user-guess'
            placeholder='guess here'
            onChange={handleChange} //calls whenever the input value changes.
        />
        <button>Click</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
