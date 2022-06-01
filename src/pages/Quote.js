import React from 'react';
import Header from '../components/Header';

const Quote = () => {
  const data = {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    cite: 'Albert Einstein',
  };

  const { quote, cite } = data;

  return (
    <>
      <Header />
      <section className="quote">
        <div className="quote-wrapper">
          <blockquote>{quote}</blockquote>
          <p>
            --
            {cite}
          </p>
        </div>
      </section>
    </>
  );
};

export default Quote;
