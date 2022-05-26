/* eslint-disable */

import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calculator">
        <div className="output"></div>
       <Button value="AC" btnClass="btns func" />
       <Button value="+/-" btnClass="btns func"  />
       <Button value="%" btnClass="btns func" />
       <Button value="÷" btnClass="btns func" />
       <Button value="7" />
       <Button value="8" />
       <Button value="9" />
       <Button value="x" btnClass="btns func" />
       <Button value="4" />
       <Button value="5" />
       <Button value="6" />
       <Button value="-" btnClass="btns func" />
       <Button value="1" />
       <Button value="2" />
       <Button value="3" />
       <Button value="+" btnClass="btns func" />
       <Button value="0" />
       <Button value="." />
       <Button value="=" btnClass="btns func" />
      </div>
    );
  }
}
