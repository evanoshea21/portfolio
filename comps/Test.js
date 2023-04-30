import React from 'react'
import classes from '../styles/Test.module.css';
import $ from 'jquery';
import { useInViewport } from 'react-in-viewport';

const Test = () => {

  return (
    <div className={classes.test}>
      <div className={classes.box}>
        <div className={classes.mask}>

        </div>
      </div>
    </div>
  )
}

export default Test
