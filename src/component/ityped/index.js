import React, {Component} from 'react';
import {init} from 'ityped2';
import styles from './styles.module.css'

export default class ItypedLine extends Component {

  constructor(strs) {
    super();
    this.strings = strs;
  }

  componentDidMount() {
    const myElement = document.querySelector('#myElement');
    let strs = this.strings.strs;
    init(myElement,
      {
        strings: strs,
        loop: true,
        typeSpeed: 100,
        showCursor: false,
        cursorChar: '|',
        cursorClass: 'ityped-cursor',
      },
    );
  }

  render() {
    return <span id='myElement' className={styles.tagLine}></span>;

  }
}
