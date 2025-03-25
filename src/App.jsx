import Batsman from './Batsman'

import Counter from './counter'
import Amount from './counter'
import './App.css'

function App() {
  const heartFall = () => {
alert('love me')
  }
  const handleClick = () => {
    alert('click me')
  }
  const handCall = () => {
    alert('click me')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
<h1>Vite + React</h1>
      <Batsman></Batsman>
<Counter></Counter>
<Amount></Amount>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handCall()}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click add 5</button>
      <button onClick={() => heartFall()}>MEOW🥲</button>
    </>
  )
}

export default App
