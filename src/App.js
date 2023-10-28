import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startCounter = () => {
  if (!isRunning) {
    setIsRunning(true);
  }
  };
  
  const stopCounter = () => {
      if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetCounter = () => {
    setCount(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default App;
