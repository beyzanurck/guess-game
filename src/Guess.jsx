import React from 'react'
import { useState } from 'react'


export default function Guess(props) {

    const [keepGame, setKeepGame] = useState(true)
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
            setKeepGame(false)
        }
        else if (guessNumber < props.random) {
            setMessage("Try a higher number.")
        }
        else {
            setMessage("Try a lower number.")
        }
    }
    
    const reset = () => {
        setKeepGame(true);
        setMessage('');
        setGuess('');
    }

    if(!keepGame){
        return(
            <div>
                <p>Congratulations! You guessed the number.</p>
                <button onClick={reset}>Play Again</button>
            </div>
        )
    }
  

  return (
    <div>

      <div class="lds-dual-ring"></div>

      <p>Guess a number between 0-100.</p>

      <form id="form" onSubmit={handleSubmit}>
        <input
            type='number'
            id='user-guess'
            name='user-guess'
            placeholder='guess here'
            onChange={handleChange} //calls whenever the input value changes.
        />
        <button id="button" type="submit">Click</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
