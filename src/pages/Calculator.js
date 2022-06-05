import React from 'react';
import Header from '../components/Header';
import CalculatorApp from '../components/CalculatorApp';

const Calculator = () => (
  <>
    <Header />
    <section className="app">
      {/* <h2>Let&apos;s do some Math!</h2> */}
      <CalculatorApp />
    </section>
  </>
);

export default Calculator;
