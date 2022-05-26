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
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(value) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="output">{total || next || operation}</div>
        <Button handler={this.eventHandler} value="AC" btnClass="btns func" />
        <Button handler={this.eventHandler} value="+/-" btnClass="btns func" />
        <Button handler={this.eventHandler} value="%" btnClass="btns func" />
        <Button handler={this.eventHandler} value="÷" btnClass="btns func" />
        <Button handler={this.eventHandler} value="7" />
        <Button handler={this.eventHandler} value="8" />
        <Button handler={this.eventHandler} value="9" />
        <Button handler={this.eventHandler} value="x" btnClass="btns func" />
        <Button handler={this.eventHandler} value="4" />
        <Button handler={this.eventHandler} value="5" />
        <Button handler={this.eventHandler} value="6" />
        <Button handler={this.eventHandler} value="-" btnClass="btns func" />
        <Button handler={this.eventHandler} value="1" />
        <Button handler={this.eventHandler} value="2" />
        <Button handler={this.eventHandler} value="3" />
        <Button handler={this.eventHandler} value="+" btnClass="btns func" />
        <Button handler={this.eventHandler} value="0" />
        <Button handler={this.eventHandler} value="." />
        <Button handler={this.eventHandler} value="=" btnClass="btns func" />
      </div>
    );
  }
}
