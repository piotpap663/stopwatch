import React from 'react';
import formatTime from '../../utils/formatTime';
import styles from './Results.module.scss';

export default ({ results }) =>
  results.map((item, index) => (
    <p className={styles.results} key={index}>
      {formatTime(item)}
    </p>
  ));
