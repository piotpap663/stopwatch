import React, { useState, useEffect } from 'react';
import useTimer from '../../hooks/timer-hook';
import Results from '../Results/Results';
import formatTime from '../utils/formatTime';
import {
  readFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage';
import styles from './ShowTimer.module.scss';

export default () => {
  const [timer, setTimer] = useTimer();
  const [results, setResults] = useState([]);

  const handleStart = () => {
    setTimer(0);
  };

  const handleRecord = () => {
    setResults((results) => {
      let newResults = [...results, timer];
      const sortedResults = newResults.sort((a, b) => a - b);

      if (sortedResults.length > 5) {
        sortedResults.length = 5;
      }
      saveToLocalStorage('results', sortedResults);
      return sortedResults;
    });
  };

  useEffect(() => {
    const rawResults = readFromLocalStorage('results');

    if (rawResults) {
      setResults([...rawResults.split(',')]);
    }
  }, []);

  return (
    <>
      <div className={styles.showTimer}>{formatTime(timer)}</div>
      <button onClick={handleStart}>Start/Resetuj</button>
      <button onClick={handleRecord}>Rekord</button>
      <Results results={results} />
    </>
  );
};
