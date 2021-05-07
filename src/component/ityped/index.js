/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
import React, {Component} from 'react';
import {init} from '../../js/ityped';
import styles from './styles.module.css'

export default class ITypedLine extends Component {

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
