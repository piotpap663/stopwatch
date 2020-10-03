import React from 'react';
import clearLocalStorage from '../../utils/clearLocalStorage';
import styles from './ClearResults.module.scss';

function ClearResults({ handleOnClick }) {
  function clearData() {
    clearLocalStorage();
    if (handleOnClick) {
      handleOnClick();
    }
  }
  return (
    <>
      <button className={styles.clearResultsBtn} onClick={clearData}>
        Reset
      </button>
    </>
  );
}

export default ClearResults;
