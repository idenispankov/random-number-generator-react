import { useState } from 'react';

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [randomNumber, setRandomNumber] = useState(50);

  function handleRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    if (maxVal < minVal) {
      setRandomNumber('');
    }
  }

  function onMinChange(e) {
    setMinVal(+e.target.value);
  }

  function onMaxChange(e) {
    setMaxVal(+e.target.value);
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <div className='randomNumber'>
          <p>
            Random Number:{' '}
            <span className='randomNumber-color'>{randomNumber}</span>
          </p>
        </div>
        <div className='numContainer'>
          <div className='numContainer__minmax'>
            <p>Min: </p>
            <input
              className='numContainer__input'
              type='number'
              value={minVal}
              onChange={onMinChange}
            />
          </div>
          <div className='numContainer__minmax'>
            <p>Max: </p>
            <input
              className='numContainer__input'
              type='number'
              value={maxVal}
              onChange={onMaxChange}
            />
          </div>
        </div>
        <button className='button' onClick={handleRandomNumber}>
          Get Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
