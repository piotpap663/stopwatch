import React from 'react';
import styles from './App.module.scss';
import ShowTimer from '../ShowTimer/ShowTimer';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <ShowTimer />
      </header>
    </div>
  );
}

export default App;
