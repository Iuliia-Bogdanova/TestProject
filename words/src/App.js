import { useState, useE } from 'react'
import words from './components/data/words.json'
import Cards from './components/Cards';
import './App.css'


export default function App() {
  const [count,setCount] = useState(0)

  function handlePrev(){
    setCount(count - 1)

      if (count - 1 < 0) {
        count = setCount.length;
      } else {
        count--;
      }
  }

  function handleNext() {
    setCount(count + 1);

      if (count + 1 == setCount.length) {
        count = 0;
      } else {
        count++;
      }
  }

  return (
    <div className="container">
      <button className="btn" onClick={handlePrev}>previous</button>
      <Cards words={words[count]} count={count} key={count} />
      <button className="btn" onClick={handleNext}>next</button>
    </div>
  );
}


