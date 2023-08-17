import React from 'react'

export default function Guess(props) {
  return (
    <div>
      <p>Guess a number between 0-100.</p>

      <form>
        <input
            type='number'
            id='user-guess'
            name='user-guess'
            placeholder='guess here'
        />
        <button>Click</button>
      </form>
    </div>
  )
}
