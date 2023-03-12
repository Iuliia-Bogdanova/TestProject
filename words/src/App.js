import { useState, useE } from 'react'
import words from './components/data/words.json'
import Cards from './components/Cards';
import './App.css'


export default function App() {
  const [count,setCount] = useState(0)

  function handlePrev(){
    setCount(count - 1)
  }

  function handleNext() {
    setCount(count + 1);
  }
  console.log(words [count]);

  return (
    <div className="container">
      <button className="btn" onClick={handlePrev}>
        prev
      </button>
      <Cards words={words[count]} count={count} key={count} />
      <button className="btn" onClick={handleNext}>
        next
      </button>
    </div>
  );
}


