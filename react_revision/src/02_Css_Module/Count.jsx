import React from 'react';
import styles from './Count.module.css';

function Count() {
  return (
    <>
      <h1 className={styles.heading}>Hello</h1>
      <h1 className={[styles.heading, styles.textXl].join(' ')}>Hello</h1>
    </>
  );
}

export default Count;
