import { useState, useCallback, useMemo } from 'react';
import Child from './components/Child';
import './App.css';

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);

  const memoizedCallback = useCallback(
    (number) => changeChildNumber(number),
    []
  );

  const memoizedValue = useMemo(() => getLargestNumber(), [arr]);

  function incrementLocal() {
    setLocalNumber((state) => state + 1);
  }

  function changeChildNumber(number) {
    setChildNumber(number);
  }

  function getLargestNumber() {
    console.log('I am working');
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([60, 70, 80, 90]);
  }

  return (
    <div className="App">
      {/* <Child changeNumber={changeChildNumber} number={childNumber} /> */}
      <Child changeNumber={memoizedCallback} number={childNumber} />
      <button onClick={incrementLocal}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
      <h1>Largest Number: {memoizedValue}</h1>
      <button onClick={changeArray}>Change Array</button>
    </div>
  );
}

export default App;
