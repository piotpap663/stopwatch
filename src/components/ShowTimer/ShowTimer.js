import React, { useState, useEffect } from 'react';
import useTimer from '../../hooks/timer-hook';
import Results from '../Results/Results';
import formatTime from '../../utils/formatTime';
import {
  readFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage';
import styles from './ShowTimer.module.scss';
import restoreTimer from '../../utils/restoreTimer';
import ClearResults from '../ClearResults/ClearResults.js';

export default () => {
  const [timer, setTimer] = useTimer();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const rawResults = readFromLocalStorage('results');
    const restoredTime = restoreTimer();
    setTimer(restoredTime);
    if (rawResults) {
      setResults([...rawResults.split(',')]);
    }
  }, [setTimer]);

  useEffect(() => {
    saveToLocalStorage('timer', timer);
  });

  const handleStart = () => {
    setTimer(0);
  };

  const handleOnClick = () => {
    setResults([]);
  };

  const handleRecord = () => {
    setResults((results) => {
      let newResults = [...results, timer];
      const sortedResults = newResults.sort((a, b) => a - b);

      if (sortedResults?.length > 5) {
        sortedResults.length = 5;
      }
      saveToLocalStorage('results', sortedResults);
      return sortedResults;
    });
  };

  return (
    <>
      <div className={styles.showTimer}>{formatTime(timer)}</div>
      <button className={styles.button} onClick={handleStart}>
        Start/Resetuj
      </button>
      <button className={styles.button} onClick={handleRecord}>
        Rekord
      </button>
      <Results results={results} />
      <ClearResults className={styles.button} handleOnClick={handleOnClick} />
    </>
  );
};
