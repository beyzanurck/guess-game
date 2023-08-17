import './App.css'
import Guess from './Guess'

const randomInt =  Math.floor(Math.random() * 101)
console.log(randomInt)
function App() {

  return (
    <>
      <Guess />
    </>
  )

}

export default App


