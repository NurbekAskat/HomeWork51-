import './App.css';
import {useState} from 'react';
import Ball from '../components/Ball/Ball';

const App = () => {
  const initialNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const generateNewNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const rand = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(rand)) {
        newNumbers.push(rand);
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <div className="app">
      <h1>Lottery Draw</h1>
      <div className="numbers">
        {numbers.map(number => (
          <Ball key={number} number={number}/>
        ))}
      </div>
      <button onClick={generateNewNumbers}>New numbers</button>
    </div>
  );
};

export default App;
