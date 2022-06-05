import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [result, setResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const eventHandler = (value) => {
    const { total, next, operation } = result;
    setResult(calculate({ total, next, operation }, value));
  };

  const { total, next, operation } = result;
  return (
    <div className="calculator">
      <div className="output">
        { next }
        {' '}
        { operation }
        {' '}
        { total }
      </div>
      <Button handler={eventHandler} value="AC" btnClass="btns func" />
      <Button handler={eventHandler} value="+/-" btnClass="btns func" />
      <Button handler={eventHandler} value="%" btnClass="btns func" />
      <Button handler={eventHandler} value="÷" btnClass="btns func" />
      <Button handler={eventHandler} value="7" />
      <Button handler={eventHandler} value="8" />
      <Button handler={eventHandler} value="9" />
      <Button handler={eventHandler} value="x" btnClass="btns func" />
      <Button handler={eventHandler} value="4" />
      <Button handler={eventHandler} value="5" />
      <Button handler={eventHandler} value="6" />
      <Button handler={eventHandler} value="-" btnClass="btns func" />
      <Button handler={eventHandler} value="1" />
      <Button handler={eventHandler} value="2" />
      <Button handler={eventHandler} value="3" />
      <Button handler={eventHandler} value="+" btnClass="btns func" />
      <Button handler={eventHandler} value="0" />
      <Button handler={eventHandler} value="." />
      <Button handler={eventHandler} value="=" btnClass="btns func" />
    </div>
  );
};

export default Calculator;
