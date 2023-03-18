import { useState, useE } from 'react'
import words from './components/data/words.json'
import Cards from './components/Cards';
import './App.css'


export default function App() {
  const [count, setCount] = useState(1)

  function handlePrev() {
    
      if (count - 1 == 0) {
        setCount(words.length - 1)
        return
      } 
        setCount(count-1)

  }

  function handleNext() {

      if (count == words.length - 1) {
        setCount(1);
        return
      } 
        setCount(count+1);
    
  }

  return (
    <div className="container">
      
      
      <button className="btn" onClick={handlePrev}>
        previous
      </button>

      <Cards words={words[count]} count={count} key={count} />

      <button className="btn" onClick={handleNext}>
        next
      </button>
      
    </div>
  );
}


