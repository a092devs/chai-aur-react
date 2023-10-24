import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  // let counter = 0

  const addValue= () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increment Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Decrement Value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App